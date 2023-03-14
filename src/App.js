import React from "react";
import '../src/styles/App.css';
import Menu from "../src/components/Menu";
import Mobile from "../src/components/Mobile";
import Home from "./components/Home";
import Education from "./components/Edutation";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Certification from "./components/Cetifications";

function App() {
  return (
    <div className="App">

      <Menu />
      <Home />
      <Education />
      <Certification />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
