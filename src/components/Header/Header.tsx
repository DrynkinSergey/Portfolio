import React from 'react';
import styles from './header.module.scss';
const Header:React.FC = () =>{
    return(
            <header className={styles.header}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </header>
    );
}
export default Header;