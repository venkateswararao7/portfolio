import React from "react";
import '../src/styles/App.css';
import Menu from "../src/components/Menu";
import Mobile from "../src/components/Mobile";
import Home from "./components/Home";
import Education from "./components/Edutation";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="laptop-menu">
        <Menu />
      </div>
      <div className="mobile-menu">
        <Mobile />
      </div>
      <Home />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
