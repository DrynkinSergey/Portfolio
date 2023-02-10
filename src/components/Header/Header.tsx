import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from './header.module.scss';
import bg from './HeaderImgTop.webp'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import '../../App.scss'
import Navigation from "../Navigation/Navigation";

gsap.registerPlugin(ScrollTrigger)




const Header: React.FC = () => {

    const [toggleBurger, setToggleBurger] = useState(false);
    const navRef = useRef(null)

    const ul = <ul ref={navRef}>
        <li id='nav' onClick={() => scrollToSection('home')}>Home
        </li>
        <li id='nav' onClick={() => scrollToSection('about')}>About
        </li>
        <li id='nav' onClick={() => scrollToSection('skills')}
        >Skills
        </li>
        <li id='nav' onClick={() => scrollToSection('works')}
        >Works
        </li>
        <li id='nav' onClick={() => scrollToSection('contact')}
        >Contact
        </li>
    </ul>;

    function scrollToSection(id: string) {
        // @ts-ignore
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
        // @ts-ignore
        setTimeout(() => setToggleBurger(false), 300)
    }

    const headerContentRef = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline()
                .fromTo('#nav', {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    delay: 1.5,
                    duration: 1,
                    stagger: .3
                })
        }, navRef);
        return () => ctx.revert();
    }, []);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.name', {
                opacity: 0,
                x: 200,
                duration: .9,
                delay: 1
            })
            gsap.from('.subtitle', {
                opacity: 0,
                x: 100,
                duration: .9,
                delay: 1.4
            })



            //scroll
            gsap.timeline()
                .to('.name', {
                    scrollTrigger: {
                        trigger: headerContentRef.current,
                        start: 'top top',
                        scrub: 3,
                    },
                    ease: 'none',
                    xPercent: 100,
                })
                .to('.subtitle', {
                    scrollTrigger: {
                        trigger: headerContentRef.current,
                        start: 'top top',
                        scrub: 3,
                    },
                    xPercent: -200,

                })


        }, headerContentRef);
        return () => ctx.revert();
    }, []);

    return (
        <header ref={headerContentRef} id='home' className={styles.header}>
            <div className={!toggleBurger ? `${styles.burgerMenu}` : `${styles.burgerMenu} ${styles.show}`}>
                {ul}
            </div>
            <img className={styles.headerBG} src={bg} alt="background" />
            <Navigation ul={ul} setToggleBurger={setToggleBurger} toggleBurger={toggleBurger} />
            <div className='container'>
                <div className={styles.aboutMe}>
                    <h1 className='name'>Drynkin Sergey</h1>
                    <h3 className='subtitle'><span>Frontend Developer</span></h3>

                </div>
            </div>

        </header>
    );
}
export default Header;