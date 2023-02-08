import '../animation.scss'
import '../App.scss';
import './../scss/global.scss';
import Header from "./Header/Header";
import AboutMe from "./About/AboutMe";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";
import { FC, useEffect, useState } from "react";
import ContactMe from "./Contact/ContactMe";
//2.5mb
const App: FC = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.pageYOffset);
        }
        )
    }, [])
    return (
        <main className="App">
            <Header scroll={scroll} />
            <AboutMe scroll={scroll} />
            <Skills scroll={scroll} />
            <Works />
            <ContactMe />
            <Footer />
        </main>
    );
}

export default App;
