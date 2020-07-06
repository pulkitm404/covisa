from tweepy import API 
from tweepy import Cursor
from tweepy import OAuthHandler
import re

# Add following tokens for twitter api
ACCESS_TOKEN = 
ACCESS_TOKEN_SEC = 
CONSUMER_KEY = 
CONSUMER_KEY_SEC = 

# # # # TWITTER AUTHENTICATER # # # #
class TwitterAuthenticator():

    def authenticate_twitter_app(self):
        auth = OAuthHandler(CONSUMER_KEY, CONSUMER_KEY_SEC)
        auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SEC)
        return auth
        
# # # # TWITTER CLIENT # # # #
class TwitterClient():
    
    def __init__(self):
        self.auth = TwitterAuthenticator().authenticate_twitter_app()
        self.twitter_client = API(self.auth)

    def get_user_timeline_tweets(self, twitter_user,num_tweets):
        tweets = []
        i=0
        try:
            for tweet in Cursor(self.twitter_client.user_timeline, id=twitter_user).items(num_tweets):
                tweets.append(tweet.text)
                i+=1
            return tweets
        except:
            return get_user_timeline_tweets(self,twitter_user,num_tweets)
       
        

def get_tweets(handle,num_tweets):    
    twitter_client = TwitterClient()
    tweets = twitter_client.get_user_timeline_tweets(handle,num_tweets)
    return tweets
    

    
    