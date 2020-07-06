import React from 'react';
import styles from './TitlePage.module.css';
import { Grid, Typography, Hidden } from "@material-ui/core";
import AOS from 'aos';

import bgillustration from '../images/bgillustration.webp';
import { useEffect } from 'react';


export const TitlePage = () => {
    AOS.init({
        duration: 1000
    })
    ;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const title =
    {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: "700",
        marginTop: "25vh"
    }
    
    

    return (
        <div>
            <Grid container justify="center" >
                <Grid data-aos="fade-right" item lg={4} xs={10}>
                    <Typography  variant="h2" style={title} >
    <p className={styles.content__container__list__item}>COVID - <span style={{color:"#C62169"}}>19</span></p>
                        <div className={styles.content}>
                        <div className={styles.content__container}>
                            <ul className={styles.content__container__list}>
                            <li className={styles.content__container__list__item}>Stay Home.</li>
                            <li className={styles.content__container__list__item}>Stay Safe.</li>
                            <li className={styles.content__container__list__item}>Stay Home.</li>
                            <li className={styles.content__container__list__item}>Stay Safe.</li>
                            </ul>
                        </div>
                        </div>
                    </Typography>
                </Grid>
                <Hidden mdDown>
                <Grid data-aos="fade-left" item lg={4} xs={10}>
                    <img className={styles.illus} src={bgillustration} alt="bg-img"></img>
                </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}
