import React from 'react';
import styles from "./works.module.scss"
import pizza from "../../assets/img/pizza.jpg";
import worksBg from "../../assets/img/WorksBg.png";
import workItemBg from "../../assets/img/workItemBg.png";

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
            aboutProject: 'In that projects used actually technology and best practice, i used Typescript with couple of React. That project have React Routes and Redux toolkit async Thunks. ',
            url: pizza,
            technology: ['ReactJs', 'SCSS', 'Typescript', 'Html', 'Redux Toolkit', 'MockAPI'],
            ghPages: 'https://drynkinsergey.github.io/Pizza/',
            repo: 'https://github.com/DrynkinSergey/Pizza'
        },
        {
            id: 2,
            projectName: 'MarvelDB',
            aboutProject: 'Project 2',
            url: 'https://media.tproger.ru/uploads/2017/04/frontend-vs-backend.jpg\n',
            technology: ['ReactJs', 'Css', 'JavaScript', 'Html', 'Redux'],
            ghPages: '',
            repo: 'https://github.com/DrynkinSergey/MarvelDB'

        },
        {
            id: 3,
            projectName: 'Project 3',
            aboutProject: 'Project 1',
            url: 'https://media.tproger.ru/uploads/2017/04/frontend-vs-backend.jpg\n',
            technology: ['ReactJs', 'Css', 'JavaScript', 'Redux'],
            ghPages: 'sdf',
            repo: 'asdffs'

        },
        {
            id: 4,
            projectName: 'Project 4',
            aboutProject: 'Project 1',
            url: 'https://media.tproger.ru/uploads/2017/04/frontend-vs-backend.jpg\n',
            technology: ['ReactJs', 'Css', 'JavaScript', 'Html'],
            ghPages: 'sdf',
            repo: 'dsafasdfas'

        },
    ];

    const [project, setProject] = React.useState(projects[0]);
    const changePicture = (index: number) => {
        setProject(projects[(project.id - 1) + index])
    }
    const changeProject = (index: number) => {
        setProject(projects[index - 1])
        console.log(classNames);


    }


    return (
        <section className={`container  ${styles.content}`}>
            <img src={worksBg} alt="bg" className={styles.bg}/>
            {project.id !== 1 &&
            <button onClick={() => changePicture(-1)} className={styles.prevBtn}> &#8592;     </button>}
            {project.id !== projects.length &&
            <button onClick={() => changePicture(1)} className={styles.nextBtn}> &#8594; </button>}
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
            <div className='colorBox'>
                <h1>Works</h1>
                <div className={styles.worksInfo}>
                    <h2>{project.projectName}</h2>
                    <h3>{project.aboutProject}</h3>
                    <h3>Link : <a target='_blank' href={project.repo}>{project.repo}</a></h3>
                    <h3>Gh-pages : <a target='_blank' href={project.ghPages}>{project.ghPages}</a></h3>
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
