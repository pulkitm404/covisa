import React from 'react';
import styles from './Prevention.module.css';

import prev from '../images/prevention.png';
import prev1 from '../images/prevention1.png';
import prev2 from '../images/prevention2.png';
import prev3 from '../images/prevention3.png';
import prev4 from '../images/prevention4.png';
import prev5 from '../images/prevention5.png';
import prev6 from '../images/prevention6.png';
import prev7 from '../images/prevention7.png';


import { Container, Row, Col } from 'react-bootstrap'

export const Prevention = () => {
    return (
        <div className="pt-3">
            <p className={styles.title1} data-aos="fade-up">Prevention</p>

            <Container fluid className="justify-content-center">
                <Row  className="justify-content-center pb-4">
                    <Col data-aos="fade-up-right" className="p-4" md={2} >
                        <img src={prev} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-right">Cover your Face</p>
                    </Col>
                    <Col data-aos="fade-up-right" className="p-4" md={2} >
                        <img src={prev1} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-right">Wash your Hands</p>
                    </Col>
                    <Col data-aos="fade-up-left" className="p-4" md={2} >
                        <img src={prev2} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-left">Boil your Food</p>
                    </Col>
                    <Col data-aos="fade-up-left" className="p-4" md={2} >
                        <img src={prev3} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-left">Avoid Contact</p>
                    </Col>
                </Row>
                <Row  className="justify-content-center pb-4">
                    <Col data-aos="fade-up-right" className="p-4" md={2} >
                        <img src={prev4} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-right">Use Soap/Sanitizer</p>
                    </Col>
                    <Col data-aos="fade-up-right" className="p-4" md={2} >
                        <img src={prev5} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-right">Cough on your Elbow</p>
                    </Col>
                    <Col data-aos="fade-up-left" className="p-4" md={2} >
                        <img src={prev6} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-left">Keep your Distance</p>
                    </Col>
                    <Col data-aos="fade-up-left" className="p-4" md={2} >
                        <img src={prev7} alt="prev"></img>
                        <p className={styles.title2} data-aos="fade-left">Regular Sleep</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
