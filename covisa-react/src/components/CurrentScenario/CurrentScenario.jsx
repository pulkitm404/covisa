import React from 'react';
import styles from './CurrentScenario.module.css';
import { Container, Col , Row} from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export const CurrentScenario = ({confirmed, recovered, deceased, lastupdate}) => {
    return (
        <Container>
        <div className="pt-5 justify-content-center">
        <p className={styles.title1} data-aos="fade-up">Coronavirus Outbreak in India</p>
        <center>
        <p className="text-muted" data-aos="zoom-in">Last Updated :  {lastupdate}</p>
        <p className="text-muted" data-aos="zoom-in">Source: MoHFW India </p>
        </center>
        <p className={styles.title2} data-aos="fade-up">Total Coronavirus Cases: <span style={{color:"#0F93AF"}}>
            <CountUp end={confirmed} separator=","  redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
            </CountUp>
            </span></p>
        <p className={styles.title3} data-aos="fade-up"><Row className="justify-content-center pb-2"><Col md={3} sm={10} >Recovered:<span style={{color:"#20AE15E0"}}>
            <CountUp end={recovered} separator=","  redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
            </CountUp>
            </span></Col><Col md={3} sm={10}>Deaths: <span style={{color:"#E21A63E0"}}>
            <CountUp end={deceased} separator=","  redraw={true}>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
            </CountUp>
                </span></Col> </Row></p>

        <Container className="pt-5">
            <Row  className="justify-content-center pb-4">
                <Col md={9} sm={10} className="pb-5" data-aos="fade-right">
                <iframe title="India" src="https://ourworldindata.org/grapher/total-cases-covid-19?country=IND" width="100%" height="600px"></iframe> 
                </Col> 
            </Row>
        </Container>
        </div>
        </Container>
    )
}
