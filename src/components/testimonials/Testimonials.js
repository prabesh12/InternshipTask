import React from "react";
import "./Testimonials.scss";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials container-fluid" id="testimonials">
        <div className="content_wrapper container">
          <p className="our_client container">
            Our <span>Testimonials</span>
          </p>
          <p className="heading container">
            What our <span>Trustworthy</span> clients say
          </p>
        </div>
        <div className="container mt-4 client_img">
          <div className="col-md-3 col-sm-12 " style={{ width: "100%" }}>
            <div className="d-flex justify-content-around align-items-end">
                <button className="left_arrow">&#8592;</button>
              <div>
                <img
                  className="client-three"
                  src="./images/Client_5.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="client-two"
                  src="./images/Client_4.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="client-one"
                  src="./images/Client_one.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="client-two"
                  src="./images/Client_2.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="client-three"
                  src="./images/Client_3.png"
                  alt=""
                />
              </div>
              <button className="right_arrow">&#8594;</button>
            </div>
          </div>
          <div className="detail container">
            <p className="description container">
              “I will admit - originally the thought of outsourcing scared the
              hell out of me. As a business owner, I am used to controlling and
              always having my finger on the pulse of my employees and
              contractors. 101infotech has delivered great results and has
              convinced me of the value of outsourcing. There were times when it
              was difficult to communicate but after some time or so everything
              starts to come together.”
            </p>
            <p className="client_name container">Rahul Kalwar CEO (Danira’s)</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
