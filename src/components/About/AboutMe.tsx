import React, {useLayoutEffect, useRef} from 'react';
import styles from './aboutMe.module.scss'
import me from './me.webp';
import cv from '../../assets/Junior_frontend__Drynkin_Sergey.pdf'
import { saveAs } from "file-saver";
import {gsap} from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

interface AboutProps {
    scroll:number
}

const AboutMe:React.FC<AboutProps> = ({scroll}) => {
    const saveFile = () => {
        saveAs(
            // @ts-ignore
            cv,
            "Junior_frontend__Drynkin_Sergey.pdf"
        );
    };

    const aboutMeRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline()
                .from('#me',{
                    scrollTrigger:{
                        markers:true,
                        trigger:aboutMeRef.current,
                        start:'top center',
                        end:'+=400',
                        scrub:2,

                    },
                    y:300,
                    opacity:0
                })
                .from('.colorBox',{
                    scrollTrigger:{
                        markers:true,
                        trigger:aboutMeRef.current,
                        start:'top 50%',
                        end:'+=200',
                        scrub:4,
                    },
                    x:900,
                    opacity:0,
                })
                .from('#me',{
                    scrollTrigger:{
                        markers:true,
                        trigger:aboutMeRef.current,
                        start:'top top',
                        end:'+=400',
                        scrub:2,

                    },
                })




        }, aboutMeRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={aboutMeRef}  id='about' className={`container   ${styles.aboutMe__content}`}>
            <img id='me' className={`${styles.imgMe}`} src={me} alt=""/>
            <div className='colorBox' >
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