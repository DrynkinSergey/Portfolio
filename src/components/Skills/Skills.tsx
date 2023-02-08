import React from 'react';
import bg from '../../assets/img/skillsBg.webp'
import styles from './skills.module.scss'
import SkillsList from './skillsList';

type Props = {
    scroll: number
}
const Skills: React.FC<Props> = ({ scroll }) => {
    const skillsUsingNow = [{
        name: 'js',
        title: 'javascript'
    },
    {
        name: 'ts',
        title: 'Typescript'
    },
    {
        name: 'redux',
        title: 'redux/rtk'
    },
    {
        name: 'css',
        title: 'css3'
    },
    {
        name: 'scss',
        title: 'scss'
    },
    {
        name: 'tailwind',
        title: 'tailwind'
    },
    {
        name: 'html',
        title: 'html5'
    },]
    const skillsLearning = [{
        name: 'node',
        title: 'Node.js'
    },
    {
        name: 'nest',
        title: 'Nest.js'
    },
    {
        name: 'next',
        title: 'Next.js'
    },
    {
        name: 'mongo',
        title: 'Mongo db'
    },
    ]
    return (
        <section id='skills' className={styles.skills} >
            <img className={styles.bg} src={bg} alt="" />
            <h1 className='title'>Skills</h1>
            <div className='container'>
                <h2 className={styles.skillsTitle}>Using now:</h2>
                <ul className={styles.usingNowSkills}>
                    {skillsUsingNow.map(skill => {
                        return <li className={styles.skill} key={skill.name}>
                            <SkillsList svgName={skill.name} />
                            <span>{skill.title.toUpperCase()}</span>
                        </li>
                    }
                    )}
                </ul>
                <h2 className={styles.skillsTitle}>Learning:</h2>
                <ul className={styles.usingNowSkills}>
                    {skillsLearning.map(skill => {
                        return <li className={styles.skill} key={skill.name}>
                            <SkillsList svgName={skill.name} />
                            <span>{skill.title.toUpperCase()}</span>
                        </li>
                    }
                    )}
                </ul>
                <h2 className={styles.skillsTitle}>Other skills:</h2>
                <ul className={styles.usingNowSkills}>
                    <li className={styles.skill}>
                        <SkillsList svgName='english' />
                        <span>{'english b1'.toUpperCase()}</span>
                    </li>

                </ul>
            </div>
        </section>

    );
};

export default Skills;
