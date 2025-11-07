import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Experience from "./Components/Experience";
import Skils from "./Components/Skils";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css"

export default function App() {
  useEffect(()=>{
Aos.init();
  },[])
  return (
    <>
      <div>
        <Navbar />
        <div className="contener">
          <HomePage/>
          <Experience/>
          <Skils/>
          <Project/>
          <Contact/>
        </div>
      </div>
    </>
  );
}
