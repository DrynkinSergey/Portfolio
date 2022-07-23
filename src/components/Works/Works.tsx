import React from 'react';
import styles from "./works.module.scss"
import worksImg from "../../assets/img/works.png";
import worksBg from "../../assets/img/WorksBg.png";
import workItemBg from "../../assets/img/workItemBg.png";

const Works = () => {
    return (
        <section className={`container ${styles.content}`}>
            <img src={worksBg} alt="bg" className={styles.bg}/>
            <img className={styles.worksImg} src={worksImg} alt="my works"/>
            <img src={workItemBg} alt="itemBg" className={styles.itemBg}/>
            <div className={styles.right}>
                <h1>Works</h1>
                <h2>There are will be my works!</h2>
            </div>
        </section>
    );
};

export default Works;
