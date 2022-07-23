import React from 'react';
import styles from "./works.module.scss"
import worksImg from "../../assets/img/works.png";
import worksBg from "../../assets/img/WorksBg.png";
import workItemBg from "../../assets/img/workItemBg.png";

const Works = () => {
    const btns = ['ReactJs', 'Css', 'JavaScript', 'Html', 'Redux']
    return (
        <section className={`container ${styles.content}`}>
            <img src={worksBg} alt="bg" className={styles.bg}/>
            <button className={styles.nextBtn}> &#8594; </button>
            <button className={styles.prevBtn}> &#8592;	 </button>


            <img className={styles.worksImg} src={worksImg} alt="my works"/>
            <img src={workItemBg} alt="itemBg" className={styles.itemBg}/>
            <div className={styles.right}>
                <h1>Works</h1>
                <div className={styles.worksInfo}>
                    <h2>Works Name</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facere nostrum, numquam odit optio porro reprehenderit sint unde vel vitae. Cumque perferendis quaerat sint! Aspernatur atque doloribus ea, eius, eligendi fugiat hic, illum mollitia nesciunt nostrum nulla optio quae vitae!</h3>
                    <div className={styles.worksBtns}>
                        <button className={styles.technologyBtn}>{btns[0]}</button>
                        <button className={styles.technologyBtn}>{btns[1]}</button>
                        <button className={styles.technologyBtn}>{btns[2]}</button>
                        <button className={styles.technologyBtn}>{btns[3]}</button>
                    </div>
                    <div className={styles.totalProjects}>
                        <button className={`${styles.totalProjects__item} ${styles.totalProjects__item__active}`}/>
                        <button className={styles.totalProjects__item}/>
                        <button className={styles.totalProjects__item}/>
                        <button className={styles.totalProjects__item}/>
                        <button className={styles.totalProjects__item}/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Works;
