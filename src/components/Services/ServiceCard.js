import React from "react";
import "./ServiceCard.scss";
const ServiceCard = (props) => {
  return (
    <>
      <div className="service_card">
        <div className="image_wrapper">
          <img src={props.image} alt="" />
        </div>
        <div className="detail">
          <p className="service_title">{props.title}</p>
          <p className="service_description">{props.detail}</p>
          
        </div>
        <button>{props.read}&#8594;</button>
      </div>
    </>
  );
};

export default ServiceCard;
