import React from 'react'

import cough from '../images/COUGH.png';
import runny from '../images/RUNNY.png';
import fever from '../images/fever.png';
import pneuomonia from '../images/pneuomonia.png';
import sore from '../images/sore.png';


import styles from './Symptoms.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export const Symptoms = () => {
    return (
        <div>
            <p className={styles.title1} data-aos="fade-up">Coronavirus Symptoms</p>
            <p className={styles.title2} data-aos="fade-up">The most common system found in a person possibly suffering from Coronavirus includes the following</p>

            <Container  className="justify-content-center">
                <Row  className="justify-content-center pb-4">
                    <Col data-aos="fade-up-right" className="sympimg pr-md-4" md={4} sm={5}>
                        <img src={cough} alt="cough"></img>
                        <p className={styles.title2} data-aos="fade-right">Cough</p>
                    </Col>
                    <Col data-aos="fade-up" className="sympimg" md={4} sm={5}>
                        <img src={runny} alt="cough"></img>
                        <p className={styles.title2} data-aos="fade-in">Runny Nose</p>
                    </Col>
                    <Col data-aos="fade-up-left" className="sympimg" md={4} sm={5}>
                        <img src={fever} alt="cough"></img>
                        <p className={styles.title2} data-aos="fade-left">Fever</p>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-4">
                    <Col data-aos="fade-up-right" className="sympimg" md={4} sm={5}>
                        <img src={pneuomonia} alt="cough"></img>
                        <p className={styles.title2} >Pneuomonia</p>
                    </Col>
                    <Col data-aos="fade-up-left" className="sympimg" md={4} sm={5}>
                        <img src={sore} alt="cough"></img>
                        <p className={styles.title2} >Sore Throat</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
