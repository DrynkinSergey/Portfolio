import React, {useEffect, useState} from 'react';
import styles from './header.module.scss';
import bg from './HeaderImgTop.png'
import '../../App.scss'
import SocialLinks from "../SocialLinks/SocialLinks";
import {ReactComponent as Scroll} from "../../assets/svg/scroll.svg";
const Header: React.FC = () => {
    const [scroll, setScroll] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', (e) => {
            setScroll(window.pageYOffset);
            }
        )
    },[])

    return (
        <header className={styles.header}>
            <img className={styles.headerBG} src={bg} alt="background"/>
            <nav>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li >Contact</li>
                </ul>
            </nav>
            <div className='container'>
                <div className={styles.aboutMe}>
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