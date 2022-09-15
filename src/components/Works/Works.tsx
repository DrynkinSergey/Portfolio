import React from 'react';
import styles from "./works.module.scss"
import pizza from "../../assets/img/pizza.webp";
import worksBg from "../../assets/img/WorksBg.webp";
import workItemBg from "../../assets/img/workItemBg.webp";

const Works = () => {
    type Projects = {
        id: number,
        projectName: string,
        aboutProject: string,
        url: string,
        technology: string[],
        repo: string,
        ghPages: string
    }
    const classNames = '`${styles.totalProjects__item} ${styles.totalProjects__item__active}`';
    const projects: Projects[] = [
        {
            id: 1,
            projectName: 'Pizza',
            aboutProject: 'In that projects i used actually technology and best practice, i used Typescript with couple of React. That project have React Routes and Redux toolkit async Thunks. ',
            url: pizza,
            technology: ['ReactJs', 'SCSS', 'Typescript', 'Html', 'Redux Toolkit', 'MockAPI'],
            ghPages: 'https://drynkinsergey.github.io/Pizza/',
            repo: 'https://github.com/DrynkinSergey/Pizza'
        },
        {
            id: 2,
            projectName: 'YouTube Clone',
            aboutProject: 'In that projects i used ReactJS, TailwindCSS.',
            url: 'https://www.muycomputer.com/wp-content/uploads/2021/10/youtube-1.jpg',
            technology: ['ReactJs', 'TailwindCSS', 'JavaScript', 'Html'],
            ghPages: 'https://drynkinsergey.github.io/YoutubeClone/',
            repo: 'https://github.com/DrynkinSergey/YoutubeClone'

        },
        {
            id: 3,
            projectName: 'MarvelDB',
            aboutProject: 'In that projects i used API Marvel, AsyncThunk, ReactRouting. I used preloader, errorBoundary, skeleton and custom hooks, services. Used best practice!',
            url: 'https://novy.tv/wp-content/uploads/sites/96/2022/06/184777_1-e1654706799476.jpg',
            technology: ['ReactJs', 'Css', 'JavaScript', 'Html', 'Redux'],
            ghPages: '',
            repo: 'https://github.com/DrynkinSergey/MarvelDB'

        },

    ];

    const [project, setProject] = React.useState(projects[0]);

    const changeProject = (index: number) => {
        setProject(projects[index - 1])
    }

    return (
        <section id='works' className={`container  ${styles.content}`}>
            <img src={worksBg} alt="bg" className={styles.bg}/>
            <div className={styles.left}>
                <div className={styles.worksImg}>
                    <img src={project.url} alt="my works"/>
                    <div className={styles.totalProjects}>
                        {
                            projects.map((item, index) => {
                                return (
                                    project.id !== index + 1 ?
                                        <button key={index} onClick={() => changeProject(item.id)}
                                                className={styles.totalProjects__item}/>
                                        :
                                        <button key={index} onClick={() => changeProject(item.id)}
                                                className={`${styles.totalProjects__item} ${styles.totalProjects__item__active}`}/>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <img src={workItemBg} alt="itemBg" className={styles.itemBg}/>
            <div className={`colorBox  ${styles.right}`}>
                <h1>Works</h1>
                <div className={styles.worksInfo}>
                    <h2>{project.projectName}</h2>
                    <h3>{project.aboutProject}</h3>
                    <h3>Link : <a target='_blank' href={project.repo}>Repository</a></h3>
                    {project.ghPages&& <h3>Gh-pages : <a target='_blank' href={project.ghPages}>Demo</a></h3>}
                    <div className={styles.worksBtns}>
                        {
                            project.technology.map((item, index) => <button key={index}
                                                                            className={styles.technologyBtn}>{item}</button>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
