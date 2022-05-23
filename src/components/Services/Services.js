import React from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard";
import ServiceList from "./ServiceList"
const Services = () => {
  return (
    <>
      <section className="container services" id="service">
        <div className="service-title">
          <div className="service_wrapper">
            <div className="container">
              <p className="our_service container">
                Our &nbsp;<span>Services</span>
              </p>
            </div>
            <div className="container">
              <p className=" container growth">
                Get&nbsp;<span>Exceptional &nbsp;</span>
                Service for Growth
              </p>
            </div>
          </div>
          <div className=" container service_desc">
            <p className="paragraph">
              Our experienced team is here to help you grow your business to a
              new height. We guarantee to provide services at it’s best to help
              you convert your idea into a brand.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {ServiceList.map((item) => {
              return (
                <div
                  className="col-md-4 col-sm-12 "
                >
                  <ServiceCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    detail={item.detail}
                    read={item.read}
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

export default Services;
