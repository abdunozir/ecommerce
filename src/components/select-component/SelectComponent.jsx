import React from "react";
import classes from "./Select.module.scss";

const Select = ({ options }) => {
  return (
    <div className={classes.selectBox}>
      <h1>{options[0]}</h1>
      <ul className={classes.selectMenu}>
        {options.map((item, index) => (
          <li className={classes.selectMenu_item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
