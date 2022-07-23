import React from 'react';
import skillsImg from '../../assets/img/skillsImg.png'
import bg from '../../assets/img/skillsBg.png'
import styles from './skills.module.scss'

const Skills = () => {
    return (
        <section className={styles.skills}>
            <img className={styles.bg} src={bg} alt=""/>
            <div className={`container ${styles.content}`}>
            <div className="left">
                <h1 className={styles.sectionName}>Skills</h1>
                <p className={styles.sectionTitle}>I enjoy creating things that live on the internet, whether that be
                    websites, applications, or anything in between.</p>
            </div>
            <img className={styles.skillsImg} src={skillsImg} alt=""/>
        </div></section>

    );
};

export default Skills;