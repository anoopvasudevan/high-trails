import React from "react";

import Input from "./Input";
import classes from "./OptionsList.module.css";

const OptionsList = (props) => {
  const {
    title,
    options,
    type,
    className,
    optionsState,
    optionSelectHandler,
  } = props;

  let inputType = "checkbox";
  if (type === "sort") inputType = "radio";

  let checkedStatus;

  const optionsForm = options.map((option, index) => {
    if (inputType === "checkbox")
      checkedStatus = optionsState.optionsStatus[option];
    if (inputType === "radio")
      checkedStatus = optionsState.currOption === option;

    return (
      <div className={classes.Option} key={index}>
        <Input
          type={inputType}
          name={title}
          option={option}
          checkedStatus={checkedStatus}
          onChange={optionSelectHandler}
        />
      </div>
    );
  });

  return (
    <form className={`${classes.OptionsList} ${className}`}>{optionsForm}</form>
  );
};

export default OptionsList;
