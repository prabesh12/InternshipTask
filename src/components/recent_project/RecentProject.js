import React from "react";
import "./RecentProject.scss";
const RecentProject = () => {
  return (
    <div className="container-fluid recent_project">
      <div className="project_wrapper">
        <img className="container" src="./images/card.png" alt="project_card" />
        <div className="container">
          <div className="content_wrapper container">
              <div className="text">
            <p className="our_recent_project">
              Our Recent <span>Project</span>
            </p>
            <p className="client_name">
              Danira’s <span>Dalmoth Company</span>{" "}
            </p>
            <p className="client_desc">
              Danira’s is a brand of “Pushpanjali Spices and Food Products”is a
              premium manufacturer and supplier of innovative quality food
              products at competitive rate. Danira’s is a product which has been
              launched in most of the places in Nepal. It a product with perfect
              mixture of spices and namkeens.
            </p>
            </div>
            <button>View More Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
