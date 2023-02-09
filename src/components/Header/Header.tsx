import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import styles from './header.module.scss';
import bg from './HeaderImgTop.webp'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import '../../App.scss'
import SocialLinks from "../SocialLinks/SocialLinks";
import { ReactComponent as Scroll } from "../../assets/svg/scroll.svg";
import Navigation from "../Navigation/Navigation";

gsap.registerPlugin(ScrollTrigger)


interface HeaderProps {
    scroll: number
}

const Header: React.FC<HeaderProps> = ({ scroll }) => {

    const [toggleBurger, setToggleBurger] = useState(false);
    const navRef = useRef(null)

    const ul = <ul ref={navRef}>
        <li id='nav' onClick={() => scrollToSection('home')} className={scroll <= 599 ? `${styles.active}` : ''}>Home
        </li>
        <li id='nav' onClick={() => scrollToSection('about')}
            className={(scroll >= 600 && scroll <= 1399) ? `${styles.active}` : ''}>About
        </li>
        <li id='nav' onClick={() => scrollToSection('skills')}
            className={(scroll >= 1400 && scroll <= 2199) ? `${styles.active}` : ''}>Skills
        </li>
        <li id='nav' onClick={() => scrollToSection('works')}
            className={(scroll >= 2200 && scroll <= 3099) ? `${styles.active}` : ''}>Works
        </li>
        <li id='nav' onClick={() => scrollToSection('contact')}
            className={scroll >= 3100 ? `${styles.active}` : ''}>Contact
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
                <div className={scroll < 600 ? `${styles.aboutMe} ` : `${styles.aboutMe}`}>
                    <h1 className='name'>Drynkin Sergey</h1>
                    <h3 className='subtitle'><span>Frontend Developer</span></h3>

                </div>
            </div>
            {scroll <= 150 && <Scroll className={styles.scroll} />}
        </header>
    );
}
export default Header;