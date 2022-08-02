import  '../animation.scss'
import '../App.scss';
import Header from "./Header/Header";
import AboutMe from "./About/AboutMe";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";
import {FC} from "react";
import ContactMe from "./Contact/ContactMe";

const App: FC = () => {
    return (
        <main className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <ContactMe/>
            <Footer/>
        </main>
    );
}

export default App;
