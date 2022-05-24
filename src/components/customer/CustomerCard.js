import React from "react";
import "./CustomerCard.scss";
const CustomerCard = (props) => {
  return (
    
    <div className="customer_card">
      <img src={props.image} alt=""  />
    </div>
  );
};

export default CustomerCard;
