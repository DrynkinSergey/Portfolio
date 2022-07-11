import React from 'react';
import styles from './aboutMe.module.scss'
import me from './me.jpg';
import me2 from './me1.png';
const AboutMe = () => {
    return (
        <section className={styles.aboutMe}>
            <div className='container  aboutMe__content'>
                <div className='pict'>
                    <img src={me2} alt=""/></div>
              <div className='right'>
                  <h1>About Me</h1>
                  <p>An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.</p>
                  <button className='btn'>Download CV</button>
              </div>
            </div>

        </section>
    );
}

export default AboutMe;