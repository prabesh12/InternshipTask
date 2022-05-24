import React from "react";
import FeatureList from "./FeatureList";
import "./Feature.scss";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <>
      <section className="Feature container-fluid" id="Feature">
        <div style={{ display: "flex" }}>
          <div className="image-shadow" src="Shadow.png" alt="" />
          <div className="content_wrapper container">
            <p className="our_feature container">
              Our <span>Feature</span>
            </p>
            <p className="heading container">
              Our <span>Solution</span> For All Your Basic Needs
            </p>
            <p className="description">
              Whatever your digital needs, We will provide you the best services
              to grow your business
            </p>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            {FeatureList.map((item) => {
              return (
                <div className="col-md-4 col-sm-12 ">
                  <FeatureCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    detail={item.detail}
                    contact={item.contact}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
