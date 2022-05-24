import React from "react";
import "./Member.scss";
const Member = () => {
  return (
    <>
      <section className="member container-fluid" id="member">
        <div className="content_wrapper container">
          <p className="our_member container">
            Our <span>Team</span>
          </p>
          <p className="heading container">
            Our <span>Core</span> member
          </p>
        </div>
        <div className="container mt-4 member_detail">
          <div className="col-md-3 col-sm-12 " style={{ width: "100%" }}>
            <div
              className="d-flex justify-content-around align-items-start "
              style={{ height: "max-content" }}
            >
              <div>
                <img
                  className="member-three"
                  src="./images/Member-5.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="member-two"
                  src="./images/Member-4.png"
                  alt=""
                />
              </div>
              <div className="arrow">
                <button className="left_arrow">
                  <span className="left">&#8592;</span>
                </button>
                <img className="member-one" src="./images/Sagar.png" alt="" />
                <button className="right_arrow">
                  <span className="right">&#8594;</span>
                </button>
              </div>
              <div>
                <img
                  className="member-two"
                  src="./images/Member-2.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="member-three"
                  src="./images/Member-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="detail">
            <p className="member_name ">Sagar Chettri</p>
            <p className="level ">Full Stack Developer</p>
            <p className="mem_description conatiner ">
              "The greatest leader is not necessarily the one who does the
              greatest things. He is the one that gets people to do the greatest
              things.”
            </p>
            <button className="join ">Join Our Team</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Member;
