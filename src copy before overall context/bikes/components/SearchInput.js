import React, { useState } from "react";

import Button from "../../shared/components/UIElements/Button";
import classes from "./SearchInput.module.css";

const SearchInput = (props) => {
  const [searchString, setSearchString] = useState("");

  const inputChangeHandler = (e) => setSearchString(e.target.value);

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
        onClick={props.onSearch.bind(null, searchString)}
      >
        <i className={`fas fa-search ${classes.SearchIcon}`}></i>
      </Button>
    </div>
  );
};

export default SearchInput;
