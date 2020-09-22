import React, { useEffect } from "react";

import Input from "./Input";
import classes from "./OptionsList.module.css";

const OptionsList = (props) => {
  const {
    title,
    options,
    type,
    className,
    onSelection,
    onSortSelection,
    optionsState,
    optionSelectHandler,
  } = props;

  useEffect(() => {
    let filterValues = [];
    if (type === "filter") {
      // filter meaning checkboxes
      for (const key in optionsState.optionsStatus) {
        if (optionsState.optionsStatus[key]) filterValues.push(key);
      }
      if (filterValues.length > 0) onSelection(title, filterValues);
    }

    if (type === "sort") {
      if (optionsState.currOption) onSortSelection(optionsState.currOption);
    }
  }, [optionsState, onSelection, onSortSelection, type, title]);

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
