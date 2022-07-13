import React from 'react';
import styles from './header.module.scss';
import bg from './HeaderImgTop.png'
import '../../App.scss'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src={bg} alt="background"/>
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
                    <ul>
                        <li>insta</li>
                        <li>git</li>
                        <li>lin</li>
                        <li>telegram</li>
                    </ul>
                </div>

            </div>

        </header>
    );
}
export default Header;