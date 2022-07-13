import '../App.scss';
import Header from "./Header/Header";
import AboutMe from "./About/AboutMe";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";
import {FC} from "react";

const App: FC = () => {
    return (
        <main className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Footer/>
        </main>
    );
}

export default App;
