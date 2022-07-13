import React from 'react';
import styles from './aboutMe.module.scss'
import me from './me1.png';

const AboutMe = () => {
    return (
        <section className={`container   ${styles.aboutMe__content}`}>
            <img className={styles.imgMe} src={me} alt=""/>
            <div className={styles.right}>
                <h1 className={styles.sectionName}>About Me</h1>
                <p className={styles.sectionTitle}>This may be information about me</p>
                <button className={styles.sectionBtn}>Download CV</button>
            </div>
        </section>
    );
}

export default AboutMe;