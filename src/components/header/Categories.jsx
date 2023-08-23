import React from "react";
import { SelectComponent } from "../";

const Categories = () => {
  const selectValues = [
    [
      "TV & Audio",
      "Smart TVs",
      "4K TVs",
      "Full HD TVs",
      "Speakers",
      "Home Thetres",
      "Projectors",
    ],
  ];

  return (
    <div className="categories">
      <div className="container">
        <div className="select-boxes">
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
          <div className="select-box">
            <SelectComponent options={selectValues[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
