import React from 'react';
import styles from './header.module.scss';
import bg from './HeaderImgTop.png'
import '../../App.scss'
import SocialLinks from "../SocialLinks/SocialLinks";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img className={styles.headerBG} src={bg} alt="background"/>
            <div className='container'>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.aboutMe}>
                    <h1>Drynkin Sergey</h1>
                    <h2>Junior <span>Front-end Developer</span></h2>
                    <SocialLinks/>
                </div>

            </div>

        </header>
    );
}
export default Header;