import React, {useEffect, useState} from 'react';
import styles from './header.module.scss';
import bg from './HeaderImgTop.webp'
import '../../App.scss'
import SocialLinks from "../SocialLinks/SocialLinks";
import {ReactComponent as Scroll} from "../../assets/svg/scroll.svg";
import Navigation from "../Navigation/Navigation";


interface HeaderProps{
    scroll:number
}
const Header: React.FC<HeaderProps> = ({scroll}) => {
    const [toggleBurger, setToggleBurger] = useState(false);

    const ul = <ul>
        <li onClick={()=> scrollToSection('home')} className={scroll <=599 ?`${styles.active}`:''}>Home</li>
        <li onClick={()=> scrollToSection('about')} className={(scroll >=600 && scroll <=1399) ?`${styles.active}`:''}>About</li>
        <li onClick={()=> scrollToSection('skills')} className={(scroll >=1400 && scroll <=2199) ?`${styles.active}`:''}>Skills</li>
        <li onClick={()=> scrollToSection('works')}  className={(scroll >=2200 && scroll <=3099) ?`${styles.active}`:''}>Works</li>
        <li onClick={()=> scrollToSection('contact')}  className={scroll >=3100 ?`${styles.active}`:''}>Contact</li>
    </ul>;
    function scrollToSection(id:string) {
        // @ts-ignore
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
        // @ts-ignore
        setTimeout(()=> setToggleBurger(false),300)
    }
    return (
        <header id='home' className={styles.header}>
            <div className={!toggleBurger?`${styles.burgerMenu}`:`${styles.burgerMenu} ${styles.show}`}>
                {ul}
            </div>
            <img  className={styles.headerBG} src={bg} alt="background"/>
            <Navigation ul={ul}  setToggleBurger={setToggleBurger}  toggleBurger={toggleBurger}/>
            <div className='container'>
                <div className={scroll <600 ?`${styles.aboutMe} slideFromLeft` : `${styles.aboutMe}`}>
                    <h1>Drynkin Sergey</h1>
                    <h2 >Junior <span>Front-end Developer</span></h2>
                    <SocialLinks/>
                </div>
            </div>
            {scroll <=150 && <Scroll className={styles.scroll}/>}
        </header>
    );
}
export default Header;