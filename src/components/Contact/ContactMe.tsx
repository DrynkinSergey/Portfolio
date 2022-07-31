import React from 'react';
import styles from './contact.module.scss'
const ContactMe = () => {
    return (
        <section className={styles.contact}>
            <form className={`container ${styles.contact__content}`}>
                <h1><p>Drop me a line.</p>
                    <p>I would like to hear from you.</p></h1>
                <div className={styles.data}>
                    <h2>Get in Touch</h2>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <textarea  placeholder='Message'/>
                    <button className='btnBlack'>Send message</button>
                </div>
            </form>
        </section>

    );
};

export default ContactMe;
