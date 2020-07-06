import React,{useEffect} from 'react';
import styles from './About.module.css'
import { Container, Row, Col } from 'react-bootstrap'

import bhavesh from '../images/bhavesh.png'
import pulkit from '../images/pulkit.png'
import divya from '../images/divya.png'
import kunwar from '../images/kunwar.png'


export const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div>
            <p className={styles.title1} data-aos="fade-up">About Us</p>

            <Container>
            <div>
            <Row>
                <Col md={3} data-aos="zoom-in-right">
                <div className={styles.atgrid}>
                <div className={styles.atcolumn}>
               
                <div className={styles.atuser}>
                    <div className={styles.atuser__avatar}><img alt="dp" src={pulkit}/></div>
                    <div className={styles.atuser__name}>Pulkit Mehta</div>
                    <div className={styles.atuser__title}>Lead Developer</div>
                    <center>
                    <ul className={styles.atsocial}>
                    <li className={styles.atsocial__item}><a href="https://www.linkedin.com/in/pulkit-mehta-266b31143/">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fillRule="evenodd"></path>
                        </svg>
                        </a></li>
                    <li className={styles.atsocial__item}>
                    </li>
                    <li className={styles.atsocial__item}>
                        </li>
                    </ul>
                    </center>
                </div>
                </div>
                </div>
                </Col>
                <Col md={3} data-aos="zoom-in-right">
                <div className={styles.atgrid}>
                <div className={styles.atcolumn}>
               
                <div className={styles.atuser}>
                    <div className={styles.atuser__avatar}><img alt="dp" src={kunwar}/></div>
                    <div className={styles.atuser__name}>Kunwar Taneja</div>
                    <div className={styles.atuser__title}>Data Analyst</div>
                    <center>
                    <ul className={styles.atsocial}>
                    <li className={styles.atsocial__item}><a href="https://www.linkedin.com/in/kunwar-taneja-84b15218b/">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fillRule="evenodd"></path>
                        </svg>
                        </a></li>
                    <li className={styles.atsocial__item}>
                    </li>
                    <li className={styles.atsocial__item}>
                        </li>
                    </ul>
                    </center>
                </div>
                </div>
                </div>
                </Col>
                <Col md={3} data-aos="zoom-in-left">
                <div className={styles.atgrid}>
                <div className={styles.atcolumn}>
               
                <div className={styles.atuser}>
                    <div className={styles.atuser__avatar}><img alt="dp" src={divya}/></div>
                    <div className={styles.atuser__name}>Divya Sharma</div>
                    <div className={styles.atuser__title}>UI Designer</div>
                    <center>
                    <ul className={styles.atsocial}>
                    <li className={styles.atsocial__item}><a href="https://www.linkedin.com/in/divya-sharma-056b56194/">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fillRule="evenodd"></path>
                        </svg>
                        </a></li>
                    <li className={styles.atsocial__item}>
                    </li>
                    <li className={styles.atsocial__item}>
                    </li>
                    </ul>
                    </center>
                </div>
                </div>
                </div>
                </Col>
                <Col md={3} data-aos="zoom-in-left">
                <div className={styles.atgrid}>
                <div className={styles.atcolumn}>
               
                <div className={styles.atuser}>
                    <div className={styles.atuser__avatar}><img alt="dp" src={bhavesh}/></div>
                    <div className={styles.atuser__name}>Bhavesh Singhal</div>
                    <div className={styles.atuser__title}>Data Management</div>
                    <center>
                    <ul className={styles.atsocial}>
                    <li className={styles.atsocial__item}><a href="https://www.linkedin.com/in/bhavesh-singhal-100006153/">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z" fillRule="evenodd"></path>
                        </svg>
                        </a></li>
                    <li className={styles.atsocial__item}>
                    </li>
                    <li className={styles.atsocial__item}>
                    </li>
                    </ul>
                    </center>
                </div>
                </div>
                </div>
                </Col>

                </Row>
                <Row>
                    <Col>
                    <p className={styles.title3} data-aos="fade-left">
                    The first case of COVID-19 was found in the city of Wuhan in the month of December, 2019 and today it has resulted in a global pandemic with more than 10 million cases wordlwide.
                    </p>
                    <p className={styles.title3} data-aos="fade-right">
                    It has affected every individual on this planet in one way or the other. One of the major effects of this pandemic is on the mental health due to major changes in the lives of each one of us.
                     </p>
                    <p className={styles.title3} data-aos="fade-left">
                     It is important for the government and other authorities to take care of its citizens physically as well as emotionally. In today's era people often vent out their true emotions on various social media platforms.
                    </p>
                    <p className={styles.title3} data-aos="fade-right">
                      Keeping that in mind, <b>CoviSA</b> is Covid-19 Sentiment Analysis performed using tweets of the users across the country. It has been implemented using real-time tweets. The results can help people around including the civil bodies to focus on the mental health of the citizens in a better way.
                    </p>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    )
}
