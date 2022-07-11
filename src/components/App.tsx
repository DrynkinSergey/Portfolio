import React from 'react';
import '../App.scss';
import Header from "./Header/Header";
import AboutMe from "./About/AboutMe";

const  App:React.FC = () => {
  return (
    <div className="App">
      <Header/>
        <AboutMe/>
    </div>
  );
}

export default App;
