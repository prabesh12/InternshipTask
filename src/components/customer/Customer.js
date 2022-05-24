import React from "react";
import CustomerList from "./CustomerList";
import "./Customer.scss";
import CustomerCard from "./CustomerCard";

const Customer = () => {
  return (
    <>
      <section className="customer container-fluid" id="customer">
           
           <div style={{display:"flex"}}>
           <div className="image-shadow" src="Shadow.png" alt="" />
          <div className="content_wrapper container">
            <p className="our_customer container">
              Our <span>Customer</span>
            </p>
            <p className="heading container">
              Our <span>Clients</span> Love Our Work
            </p>
            <p className="description">
              But don’t just take our word for it...
            </p>
          </div>
          </div>
        <div className="container mt-4">
          <div className="row">
            {CustomerList.map((item) => {
              return (
                <div className="col-md-3 col-sm-12 ">
                  <CustomerCard key={item.id} image={item.image} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
