import React, { useState, useRef, useContext } from "react";

import SearchInput from "../components/SearchInput";
import FilterInput from "../components/FilterInput.js";
import ActiveFilters from "../components/ActiveFilters";
import Button from "../../shared/components/UIElements/Button";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";
import { FilterOptionsStatusContext } from "../../shared/context/filter-options";
import classes from "./ProductSearchControls.module.css";

const ProductSearchControls = (props) => {
  // const { onSearch, onFilter, onSort, categories, brands, sortOptions } = props;
  const {onSearch} = props;

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
    resetSortOptionState
  } = useContext(FilterOptionsStatusContext);
  console.log('categoriesState');
  console.log(categoriesState);

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

  return (
    <div className={classes.ProductSearchControls}>
      <SearchInput onSearch={onSearch} />
      <div ref={searchControlsRef}>
        <div className={classes.ButtonGroup}>
          <Button
            className={`${classes.Button} ${
              showFilterOptions && classes.ButtonActive
            }`}
            size="medium"
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
            size="medium"
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
            // onFilter={onFilter}
            optionsState={categoriesState}
            onOptionSelect={updateCategoryState}
          />

          <FilterInput
            title="Brands"
            options={brands}
            filterType="filter"
            // onFilter={onFilter}
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
            // onSort={onSort}
            optionsState={sortOptionsState}
            onOptionSelect={updateSortOptionsState}
          />
        </div>
        {!showFilterOptions && !showSortOptions && (
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
                  reset: resetSortOptionState,
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearchControls;
