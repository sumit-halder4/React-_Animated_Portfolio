import React from "react";
import skills from "./Data/skills.json";

const Skils = () => {
  return (
    <div className="container skils" id="Skills">
      <h1>SKILLS</h1>
      <div className="items">
        {skills.map((data, index) => (
          <div
            className="item"
            key={data.id || index}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={`/${data.imageSrc}`} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
