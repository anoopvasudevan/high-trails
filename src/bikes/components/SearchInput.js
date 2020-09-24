import React, { useState, useContext } from "react";

import { FilterOptionsStatusContext } from "../../shared/context/filter-options";
import Button from "../../shared/components/UIElements/Button";
import classes from "./SearchInput.module.css";

const SearchInput = () => {
  const [searchString, setSearchString] = useState("");

  const { setSearchQuery } = useContext(
    FilterOptionsStatusContext
  );


  const inputChangeHandler = (e) => {
    setSearchString(e.target.value);
    setSearchQuery(e.target.value);
  };

  // console.log("SearchInput - rendering");
  return (
    <div className={classes.Container}>
      <input
        className={classes.SearchInput}
        type="text"
        placeholder="Search"
        value={searchString}
        onChange={inputChangeHandler}
      />
      <Button
        className={classes.SearchButton}
        size="small"
        inverse
        noborder
        onClick={() => setSearchQuery(searchString)}
      >
        <i className={`fas fa-search ${classes.SearchIcon}`}></i>
      </Button>
    </div>
  );
};

export default SearchInput;
