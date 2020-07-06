
import React, {useEffect, useState} from 'react'
import { Paper, TextField, Button, Grid } from '@material-ui/core'
import { Container, Row, Col} from 'react-bootstrap'
import styles from './Analysis.module.css'
import { HorizontalBar, Doughnut } from 'react-chartjs-2';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {Carousel} from 'react-bootstrap'


export const AnalysisFetch = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);

  
      var sents = (window.token).slice(1,(window.token).length-1).split(',');
      var sents1 = (window.token1).slice(1,(window.token1).length-1).split(',');
      var sents2 = (window.token2).slice(1,(window.token2).length-1).split(',');
      var sents3 = (window.token3).slice(1,(window.token3).length-1).split(',');
      var sents4 = (window.token4).slice(1,(window.token4).length-1).split(',');
      var handle = "Emotional Intensity of latest tweets by @"+(window.tokenhandle);
      var thandle = (window.tokenhandle);
          
    
    const datag = {
      dataHorizontal: {
        labels: ['Anger', 'Sadness', 'Fear', 'Joy', 'Disgust'],
        datasets: [
          {
            label: handle,
            data: sents,
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }
        ]
      }
    }


    const datag1 = {
      dataHorizontal: {
        labels: ['Anger', 'Sadness', 'Fear', 'Joy', 'Disgust'],
        datasets: [
          {
            label: handle,
            data: sents1,
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }
        ]
      }
    }

    const datag2 = {
      dataHorizontal: {
        labels: ['Anger', 'Sadness', 'Fear', 'Joy', 'Disgust'],
        datasets: [
          {
            label: handle,
            data: sents2,
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }
        ]
      }
    }

    const datag3 = {
      dataHorizontal: {
        labels: ['Anger', 'Sadness', 'Fear', 'Joy', 'Disgust'],
        datasets: [
          {
            label: handle,
            data: sents3,
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }
        ]
      }
    }

    const datag4 = {
      dataHorizontal: {
        labels: ['Anger', 'Sadness', 'Fear', 'Joy', 'Disgust'],
        datasets: [
          {
            label: handle,
            data: sents4,
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }
        ]
      }
    }

    return (
        <div>
            <p className={styles.title1} data-aos="fade-up">Sentiment Analysis</p>
            <p className={styles.title3} data-aos="fade-up">Tweets by {window.tokenhandle} Analyzed</p>
            <Container fluid>
                <Row className="justify-content-center pt-5" >
               
                    <Col data-aos="fade-right" lg={2} md={10}>
                     <a className="twitter-timeline" data-height="700" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a>
                    </Col>
                    <Col data-aos="fade-in" lg={8} md={10}>
                      
                    <Paper style={{minHeight: "70vh"}} elevation={3}>
                      <div className="p-5 w-60" > 
                     
                      <form action="/analysis" method="post">
                        <Grid container spacing={1} justify="center">
                          <Grid item lg={9}>
                        <TextField name="text" fullWidth="true" label="Twitter Handle" variant="outlined"/>
                        </Grid>
                        <Grid item lg={3}>
                        <Button type="submit" variant="contained" startIcon={<AssessmentIcon />} fullWidth="true" color="primary" size="large">
                          Analyse
                        </Button>
                        </Grid>
                        </Grid>
                      </form>
                      </div>
                      
                      <Grid container spacing={2} justify="center">
                        <Grid item lg={7}>
                        <Carousel interval="3000">
                      <Carousel.Item>
                      <HorizontalBar
                              data={datag.dataHorizontal}
                              options={{ responsive: true }}
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                      <HorizontalBar
                              data={datag1.dataHorizontal}
                              options={{ responsive: true }}
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                      <HorizontalBar
                              data={datag2.dataHorizontal}
                              options={{ responsive: true }}
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                      <HorizontalBar
                              data={datag3.dataHorizontal}
                              options={{ responsive: true }}
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                      <HorizontalBar
                              data={datag4.dataHorizontal}
                              options={{ responsive: true }}
                          />
                      </Carousel.Item>
                    </Carousel>

                        </Grid>
                        <Grid item lg={5}>
                        <Doughnut
                            data={{
                            labels: ['Neutral', 'Positive', 'Negative'],
                            datasets: [
                                {
                                label: 'People',
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                data: [25, 45, 30],
                                },
                            ],
                            }}
                            options={{
                            legend: { display: true },
                            title: { display: true, text: "Sentiment Analysis of Latest 100 Tweets: "+ thandle },
                            animation: {animateRotate : true},
                            responsive: true,
                            maintainAspectRatio: true
                            
                            }}
                        />
                        </Grid>

                      </Grid>
                   
                 
               
                    </Paper>
                    </Col>
                    <Col data-aos="fade-left" lg={2} md={10}>
                     <a className="twitter-timeline" data-height="700" href="https://twitter.com/MoHFW_India?ref_src=twsrc%5Etfw">Tweets by MoHFW</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
