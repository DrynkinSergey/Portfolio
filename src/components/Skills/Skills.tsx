import React from 'react';
import skillsImg from '../../assets/img/skillsImg.webp'
import bg from '../../assets/img/skillsBg.webp'
import styles from './skills.module.scss'
import SkillsList from "./skillsList";

type Props = {
    scroll:number
}
const Skills:React.FC<Props> = ({scroll}) => {
    return (
        <section id='skills' className={styles.skills} >
            <img className={styles.bg} src={bg} alt=""/>
            <div className={scroll >1500 ?` container ${styles.content} slideFromBottom `: `container ${styles.content} op0`}>
            <div className="left">
               <div className='colorBox'>
                   <h1 className={styles.sectionName}>Skills</h1>
                   <p className={styles.sectionTitle}>I enjoy creating things that live on the internet, whether that be
                       websites, applications, or anything in between.</p>
               </div>

                <SkillsList/>
            </div>
            <img className={styles.skillsImg} src={skillsImg} alt=""/>
        </div></section>

    );
};

export default Skills;
