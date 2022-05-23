import React from "react";
import "./AboutCard.scss";
const AboutCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="card-box">
          <div className="about-card ">
            <img className="about-image" src={props.image} alt="product" />
            <div className="card-detail">
              <h6 className="title">{props.title}</h6>
              <p className="description">{props.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
