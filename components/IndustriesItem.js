import React from "react";

const IndustriesItem = (props) => {
  return (
    <div className="row gx-0">
      {props.data.map((el, index) => {
        return (
          <div className="col-lg-4 industries-we-serve-item" key={index}>
            <img src={el.icon} alt={el.title} />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IndustriesItem;
