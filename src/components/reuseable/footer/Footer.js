import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer
      id="footer"
        className="container-fluid align-items-center footer"
        style={{
          backgroundColor: "#091E80",
          borderRadius: "10px",
          height: "500px",
          bottom: "0",
          border: " 1px solid #91A3F7",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-4">
            <div className="col-md-5 join ">
              <h6>Join our newsletter</h6>
              <p className="desc">
                Sign up to stay updated with the latest insights, news, and
                more.
              </p>
            </div>
            <div className="col-md-5">
              <div className="d-flex subscribe">
                <input type="email" placeholder="Enter your email" required />
                <button className="sub">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between menu">
            <div>
              <p>Company</p>
              <ul>
                <li className="link">About us</li>
                <li className="link">What We Do</li>
                <li className="link">Contact</li>
              </ul>
            </div>
            <div>
              <p>Services</p>
              <ul>
                <li className="link">Web Design</li>
                <li className="link">App Development</li>
                <li className="link">Graphic Designing</li>
                <li className="link">Digital Marketting</li>
                <li className="link">SEO Optimization</li>
              </ul>
            </div>
            <div>
              <p>Join</p>
              <ul>
                <li className="link">Careers at 101 Infotech</li>
                <li className="link">Internships</li>
              </ul>
            </div>
            <div>
              <p>Connect With Us</p>
              <ul>
                <li className="link">Facebook</li>
                <li className="link">Instagram</li>
                <li className="link">Twitter</li>
                <li className="link">Linkedin</li>
                <li className="link">Youtube</li>
              </ul>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between "
            style={{ marginTop: "35px" }}
          >
            <p className="col-md-4 copy-right">
              Copyright 2022 101InfoTech. All rights reserved.
            </p>
            <p className="col-md-6 policy">Privacy Policy</p>
            <img className="col-md-2 dummy" src="./images/big.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
