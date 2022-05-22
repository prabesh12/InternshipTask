import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
const Header = () => {
  const close = useRef(null);

  const handleClose = () => {
    close.current.click();
  };
  return (
    <>
      <div className="header" id="header">
        <div className="main_nav">
          <div className="container">
            <div className="row align-items-center justify-content-around " style={{ marginTop:"20px"}}>
              <div className="col-lg-2 col-md-12 logo_wrap">
                <div>
                  <a href="/#home">
                    {" "}
                    <img className="logo" src="images/logo.png" alt="" />
                  </a>
                </div>
                <div className="hamburger">
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    <i className="fas fa-bars"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <div className="nav_wrapper">
                  <ul className="nav_bar">
                    <li>
                      <a href="/#home" className="active link" onClick={{}}>
                        HOME
                      </a>
                    </li>
                    <li>
                      <a href="/#about" className="link">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="link">
                        Services <span>f329</span>
                      </a>
                    </li>

                    <li>
                      <a href="#blogs" className="link">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <button>Login</button>
                </div>

                <div className="canvas_wrap">
                  <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      ref={close}
                      style={{ display: "none" }}
                    ></button>
                    <h2>MENU</h2>
                    <ul className="nav_bar">
                      <li>
                        <a href="#home" className="active link">
                          HOME
                        </a>
                      </li>
                      <li>
                        <a href="#about" className="link">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#services" className="link">
                          Services <span>f329</span>
                        </a>
                      </li>
                      <li>
                        <a href="#blogs" className="link">
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a href="#contact" className="link">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                    <div
                      className="offcanvas-backdrop fade show"
                      style={{ opacity: "0", position: "fixed", zIndex: "-1" }}
                      onClick={handleClose}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
