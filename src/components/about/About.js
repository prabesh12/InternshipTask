import React from "react";
import List from "./List";
import "./About.scss";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
    <section className="about" id="about">
    <div className="container">
      <div className="content container">
        <p className="heading container">
          <span>Movement</span> For Brand&nbsp;<span>Digitization</span>
        </p>
        <p className="description container">
          101 INFOTECH is an extension of your organization. You aren’t just
          another client. You are a partner, and you deserve an experience
          that is comfortable and tailored to your needs. We are the team
          you deserve. We don’t claim to be the best in Nepal or Kathmandu,
          but we do our best and deliver what you need.
        </p>
      </div>
    </div>
        <div className="container">
          <div className="row">
            {List.map((item) => {
              return (
                <div
                  className="col-md-6 col-sm-12 "
                >
                  <AboutCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    detail={item.detail}
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

export default About;
