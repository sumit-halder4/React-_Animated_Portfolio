import heroImg from "../assets/hero/hero.avif";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HomePage = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const option = {
      strings: [
        "Welcome to my profile",
        "My Name is Sumit Halder",
        "I'm front end devoloper",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, option);
    return () => {
      typed.destroy;
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href="/pdf/resume.pdf"
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
