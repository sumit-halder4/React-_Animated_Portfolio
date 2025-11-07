import React from "react";
import skils from "./Data/skills.json";

const Skils = () => {
  return (
    <>
      <div className="container skils" id="Skills">
        <h1>SKILS</h1>
        <div className="items">
        {skils.map((Data) => (
          
            <div className="item"  key={Data.id}
             data-aos="flip-left"
          data-aos-duration="1000">
              <img src={`/${Data.imageSrc}`} alt={Data.title} />
              <h3>{Data.title}</h3>
            </div>
          
        ))}
        </div>
      </div>
    </>
  );
};

export default Skils;
