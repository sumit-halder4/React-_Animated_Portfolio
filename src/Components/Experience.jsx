import React from "react";
import experience from "./Data/experience.json";

const Exprence = () => {
  return (
    <div className="container ex" id="Experience">
      <h1>EXPERIENCE</h1>
      {experience.map((Data) => {
        return (
          <div key={Data.id} className="ex-items text-center my-5"
           data-aos="zoom-in"
          data-aos-duration="1000"
          >
            <div className="left">
              <img src={`/${Data.imageSrc}`} alt="" />
            </div>
            <div className="right">
              <h2>{Data.role}</h2>
              <h4>
                <span style={{color:"yellowgreen"}}>
                  {Data.startDate}
                {""}
                {Data.endDate} </span>
                {""}
                <span  style={{color:"yellow"}}>
                  {Data.location}
                </span>
               
                
              </h4>
              <h5 style={{color:"yellow"}}>{Data.experiences[0]}</h5>
              <h5 style={{color:"yellow"}}>{Data.experiences[1]}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exprence;
