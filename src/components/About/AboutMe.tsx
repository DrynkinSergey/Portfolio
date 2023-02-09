import React, { useLayoutEffect, useRef } from 'react';
import styles from './aboutMe.module.scss'
import me from './me.webp';
import cv from '../../assets/Frontend_Drynkin_Sergey_CV.pdf'
import { saveAs } from "file-saver";
import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

interface AboutProps {
    scroll: number
}

const AboutMe: React.FC<AboutProps> = ({ scroll }) => {
    const saveFile = () => {
        saveAs(
            // @ts-ignore
            cv,
            "Frontend_Drynkin_Sergey_CV.pdf"
        );
    };

    const aboutMeRef = useRef(null)
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from('#me', {
                scrollTrigger: {
                    trigger: aboutMeRef.current,
                    start: '-500',
                    end: '+=300',
                    scrub: 2
                },
                xPercent: -200,
                opacity: 0
            })
            tl.from('.title', {
                scrollTrigger: {
                    trigger: aboutMeRef.current,
                    start: '-500',
                    end: '+=50',
                    scrub: 2
                },
                yPercent: 50,
                opacity: 0
            })
            tl.from('p', {
                scrollTrigger: {
                    trigger: aboutMeRef.current,
                    start: '-500',
                    end: '150',
                    scrub: 2
                },
                yPercent: 50,
                opacity: 0,
                stagger: .3
            })

        }, aboutMeRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={aboutMeRef} id='about' className={`container   ${styles.aboutMe__content}`}>
            <img id='me' className={`${styles.imgMe}`} src={me} alt="me" />

            <div className={styles.aboutMe__content_wrapper}>
                <h1 className={`${styles.sectionName} title`}>About Me</h1>

                <p className={styles.sectionTitle}>Hi! I'm a Frontend developer. I want to work and develop as a specialist among like-minded people! Ready to study and work hard.
                </p>
                <p> I'm love coding, have a nice sense of humor and positive person!</p>
                <button onClick={saveFile} className='btnBlack'>Download CV</button>
            </div>

        </section>
    );
}

export default AboutMe;