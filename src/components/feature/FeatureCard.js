import React from "react";
import "./FeatureCard.scss";
const FeatureCard = (props) => {
  return (
    <>
      <div className="feature_card">
        <div className="image_wrapper">
          <img src={props.image} alt="" />
        </div>
        <div className="detail">
          <p className="feature_title">{props.title}</p>
          <p className="feature_description">{props.detail}</p>
        </div>
        <button>{props.contact}</button>
      </div>
    </>
  );
};

export default FeatureCard;
