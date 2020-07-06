from flask import Flask, render_template, request
from Fetch import get_tweets
import json
import requests
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features, EmotionOptions
from textblob import TextBlob
from nltk.tokenize import word_tokenize
import joblib
from preprocessing import remove_noise,analysis

app = Flask(__name__)

model = joblib.load('TRAINED.pkl')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
     return render_template("index.html")

@app.route("/")
def index():
    return render_template("index.html")

    
@app.route('/analysis', methods=['GET','POST'])
def get_results():
    authenticator = IAMAuthenticator()#enter IBM IAM token for authentication
    natural_language_understanding = NaturalLanguageUnderstandingV1(version='2019-07-12',authenticator=authenticator)
    natural_language_understanding.set_service_url('https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/')#Add the instance id here

    if request.method == "POST":

        data = request.form.get('text')
        tweets = get_tweets(data,5)
        results = []
        response = []
        for tw in tweets:
#            for each in tweets:
            #each_tokens = remove_noise(word_tokenize(tw))
            #results.append(model.classify(dict([token, True] for token in each_tokens)))
            respo = (natural_language_understanding.analyze(html=tw,features=Features(emotion=EmotionOptions(targets=[' ','nation','WHO','Stay','home','sick','wear','safety','Clean','clean','Mask','India','condition','masks','The','is','a','the','covid','quarantine','lockdown','COVID-19']))).get_result())
            respoarr = [respo['emotion']['document']['emotion']['anger'],respo['emotion']['document']['emotion']['sadness'],respo['emotion']['document']['emotion']['fear'],respo['emotion']['document']['emotion']['joy'],respo['emotion']['document']['emotion']['disgust']]
            response.append(respoarr)

        return render_template("index.html", token=response[0], token1=response[1],token2=response[2],token3=response[3],token4=response[4], handle=data,  temp=response)


    
if __name__=='__main__':
    app.run()

