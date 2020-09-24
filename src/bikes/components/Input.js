import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let { type, name, option, onChange, checkedStatus } = props;

  const id = option.replace(" ", "-");

  // console.log("Input - rendering");
  return (
    <div className={classes.InputContainer}>
      <label htmlFor={id} name={name}>
        {option}
        <input
          type={type}
          id={id}
          name={name}
          value={option}
          checked={checkedStatus}
          onChange={onChange}
          className={
            type === "checkbox" ? classes.CheckboxInput : classes.RadioInput
          }
        />
      </label>
    </div>
  );
};

export default Input;
