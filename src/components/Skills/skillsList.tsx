import React from 'react';
import styles from './skills.module.scss'
import {ReactComponent as ReactLogo} from "../../assets/svg/skills/react.svg";
import {ReactComponent as TsLogo} from "../../assets/svg/skills/ts.svg";
import {ReactComponent as HtmlLogo} from "../../assets/svg/skills/html.svg";
import {ReactComponent as SassLogo} from "../../assets/svg/skills/sass.svg";
import {ReactComponent as ReduxLogo} from "../../assets/svg/skills/redux.svg";
import {ReactComponent as JavascriptLogo} from "../../assets/svg/skills/javascript.svg";
import {ReactComponent as TailwindLogo} from "../../assets/svg/skills/tailwind.svg";

const SkillsList = () => {

    return (
        <ul className={styles.svgLogo}>
            <li><ReactLogo className={styles.svgLink} /> React</li>
            <li><TsLogo className={styles.svgLink}/>TS</li>
            <li><HtmlLogo className={styles.svgLink} />Html</li>
            <li><SassLogo className={styles.svgLink} />Sass</li>
            <li><ReduxLogo className={styles.svgLink} />Redux</li>
            <li><JavascriptLogo className={styles.svgLink}/>Javascript</li>
            <li><TailwindLogo className={styles.svgLink}/>Tailwind</li>
        </ul>
    );
};

export default SkillsList;