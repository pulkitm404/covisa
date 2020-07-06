import React from 'react';
import styles from './Features.module.css';
import { Container, Col , Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import implement from '../images/implement.png';

export const Features = () => {

    const gstyle =
    {
        minHeight: '50vh',
        background: "transparent linear-gradient(37deg, #012F39 0%, #022D36 18%, #101516 100%) 0% 0% no-repeat padding-box",
        borderRadius: '20px'
    }

    return (
        <div className="pt-5">
            <p className={styles.title1} data-aos="fade-up">CoviSA is a Covid19 based Sentiment Analysis that uses Twitter's real time API.</p>
            <p className={styles.title2} data-aos="zoom-in">To analyse the sentiments being depicted in the tweets based on the trending hashtags.</p>

            <Container className="pt-5">
                <Row  className="justify-content-center pb-4">
                    <Col md={7} sm={10} className="pb-5 mr-md-5" data-aos="flip-right">
                        <div style={gstyle}>
                        <p className={styles.titlecard} style={{paddingTop:"5%", paddingLeft: "10%"}}>Implementation</p>
                        <img alt="implement" className={styles.imgi} src={implement}></img>
                        <Link className="links" to="/analysis">
                        <button className={styles.buttonfeat} size="md">Read More</button>
                        </Link>
                        </div>
                    </Col>
                    
                    <Col md={4} sm={10} className="pb-5" data-aos="flip-left">
                        <div style={gstyle}>
                            <p className={styles.titlecard} style={{paddingTop:"10%", paddingLeft: "10%"}}>About Us</p>
                            <p className={styles.title3}>
                            This project has been inspired by the recent popularity of Twitter and keeping in mind the sentiments of people due to numerous changes being made in our day to day lives.
                            </p>
                            <Link className="links" to="/about">
                            <button className={styles.buttonfeat} size="md">Read More</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
