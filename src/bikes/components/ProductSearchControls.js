import React, { useState, useRef, useContext } from "react";

import SearchInput from "../components/SearchInput";
import FilterInput from "../components/FilterInput.js";
import ActiveFilters from "../components/ActiveFilters";
import Button from "../../shared/components/UIElements/Button";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";
import { FilterOptionsStatusContext } from "../../shared/context/filter-options";
import classes from "./ProductSearchControls.module.css";

const ProductSearchControls = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const {
    categoriesState,
    brandsState,
    sortOptionsState,
    updateCategoryState,
    updateBrandsState,
    updateSortOptionsState,
    resetCategoryState,
    resetBrandsState,
    resetSortOptionsState,
  } = useContext(FilterOptionsStatusContext);

  const categories = Object.keys(categoriesState.optionsStatus);
  const brands = Object.keys(brandsState.optionsStatus);
  const sortOptions = Object.keys(sortOptionsState.optionsStatus);

  const searchControlsRef = useRef(null);

  const filterClickedHandler = () => {
    setShowFilterOptions((state) => !state);
    setShowSortOptions(false);
  };

  const sortClickedHandler = () => {
    setShowSortOptions((state) => !state);
    setShowFilterOptions(false);
  };

  const clickedOutsideHandler = () => {
    setShowFilterOptions(false);
    setShowSortOptions(false);
  };

  useOutsideClick(searchControlsRef, clickedOutsideHandler);

  // console.log("ProductSearchControls - rendering");
  return (
    <div className={classes.ProductSearchControls}>
      <SearchInput />
      <div ref={searchControlsRef}>
        <div className={classes.ButtonGroup}>
          <Button
            className={`${classes.Button} ${
              showFilterOptions && classes.ButtonActive
            }`}
            gray
            inverse
            onClick={filterClickedHandler}
          >
            Filter
          </Button>
          <Button
            className={`${classes.Button} ${
              showSortOptions && classes.ButtonActive
            }`}
            // size="medium"
            gray
            inverse
            onClick={sortClickedHandler}
          >
            Sort
          </Button>
        </div>

        <div
          className={`${classes.FilterOptions} ${
            showFilterOptions && classes.FilterOptionsShow
          }`}
        >
          <FilterInput
            title="Categories"
            options={categories}
            filterType="filter"
            optionsState={categoriesState}
            onOptionSelect={updateCategoryState}
          />

          <FilterInput
            title="Brands"
            options={brands}
            filterType="filter"
            optionsState={brandsState}
            onOptionSelect={updateBrandsState}
          />
        </div>

        <div
          className={`${classes.SortOptions} ${
            showSortOptions && classes.SortOptionsShow
          }`}
        >
          <FilterInput
            title="Sort"
            options={sortOptions}
            filterType="sort"
            optionsState={sortOptionsState}
            onOptionSelect={updateSortOptionsState}
          />
        </div>

        {/* {!showFilterOptions && !showSortOptions && ( */}
        <div className={classes.ActiveFiltersContainer}>
          <ActiveFilters
            filters={{
              category: {
                state: categoriesState,
                reset: resetCategoryState,
              },
              brand: { state: brandsState, reset: resetBrandsState },
              sortOption: {
                default: sortOptions[0],
                state: sortOptionsState,
                reset: resetSortOptionsState,
              },
            }}
          />
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default ProductSearchControls;
