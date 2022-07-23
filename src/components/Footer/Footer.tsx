import React from 'react';
import footerBg from '../../assets/img/footerBg.png'
import styles from './footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={footerBg} alt=""/>
            <h3>Drynkin Sergey</h3>
            <p>social blocks</p>
            <p>All Rights Reserved 2022 Drynkin Sergey</p>
        </footer>
    );
};

export default Footer;
