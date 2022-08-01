import React from 'react';
import styles from './aboutMe.module.scss'
import me from './me1.png';
import cv from '../../assets/Junior_frontend__Drynkin_Sergey.pdf'
import { saveAs } from "file-saver";

const AboutMe = () => {
    const saveFile = () => {
        saveAs(
            // @ts-ignore
            cv,
            "Junior_frontend__Drynkin_Sergey.pdf"
        );
    };
    return (
        <section className={`container   ${styles.aboutMe__content}`}>
            <img className={styles.imgMe} src={me} alt=""/>
            <div className='colorBox'>
                <h1 className={styles.sectionName}>About Me</h1>
                <p className={styles.sectionTitle}>Hi! I'm a Frontend developer. I want to work and develop as a specialist among like-minded people! Ready to study and work hard.
               </p>
                <p> I'm love coding, have a nice sense of humor and positive person!</p>
                <button onClick={saveFile} className='btnBlack'>Download CV</button>
            </div>
        </section>
    );
}

export default AboutMe;