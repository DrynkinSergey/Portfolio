import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import bg from '../../assets/img/skillsBg.webp'
import styles from './skills.module.scss'
import SkillsList from './skillsList';


const Skills: React.FC = () => {

    const skillsRef = useRef(null)
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();


            tl.from('.title', {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: '-500',
                    end: '+=150',
                    scrub: 2
                },
                yPercent: 50,
                opacity: 0
            })
            tl.from('li', {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: '-200',
                    end: '190',
                    scrub: 2
                },
                stagger: .1,
                scale: 0
            })

        }, skillsRef);
        return () => ctx.revert();
    }, []);
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
        <section id='skills' ref={skillsRef} className={styles.skills} >
            <img className={styles.bg} src={bg} alt="bg" />
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
