import React from "react";

import classes from "./ActiveFilter.module.css";

const ActiveFilter = (props) => {
  const { filterName, filterReset } = props;

  const onClickHandler = (e) => {
    filterReset(e.target.dataset.name);
  };

  // console.log("ActiveFilter - rendering");
  return (
    <span
      className={classes.ActiveFilter}
      onClick={onClickHandler}
      data-name={filterName}
    >
      {filterName}
    </span>
  );
};

export default ActiveFilter;
