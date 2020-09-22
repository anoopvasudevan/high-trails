import React, { useState, useRef } from "react";

import SearchInput from "../components/SearchInput";
import FilterInput from "../components/FilterInput.js";
import ActiveFilters from "../components/ActiveFilters";
import Button from "../../shared/components/UIElements/Button";
import { useOutsideClick } from "../../shared/hooks/useOutsideClick";
import { useOptionsState } from "../../shared/hooks/useOptionsState";
import classes from "./ProductSearchControls.module.css";

const ProductSearchControls = (props) => {
  const { onSearch, onFilter, onSort, categories, brands, sortOptions } = props;
  const extractedSortOptions = sortOptions.map((option) => option.name);
  const defaultSortOption = extractedSortOptions[0];

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const searchControlsRef = useRef(null);

  const {
    optionsState: categoriesState,
    onOptionSelect: onCategorySelect,
    resetOptionsStatus: resetCategoryState,
  } = useOptionsState(categories);

  const {
    optionsState: brandsState,
    onOptionSelect: onBrandSelect,
    resetOptionsStatus: resetBrandState,
  } = useOptionsState(brands);

  const {
    optionsState: sortOptionsState,
    onOptionSelect: onSortOptionSelect,
    resetCurrOption: resetSortOptionState,
  } = useOptionsState(extractedSortOptions, defaultSortOption);

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
            onFilter={onFilter}
            optionsState={categoriesState}
            onOptionSelect={onCategorySelect}
          />

          <FilterInput
            title="Brands"
            options={brands}
            filterType="filter"
            onFilter={onFilter}
            optionsState={brandsState}
            onOptionSelect={onBrandSelect}
          />
        </div>

        <div
          className={`${classes.SortOptions} ${
            showSortOptions && classes.SortOptionsShow
          }`}
        >
          <FilterInput
            title="Sort"
            options={extractedSortOptions}
            filterType="sort"
            onSort={onSort}
            optionsState={sortOptionsState}
            onOptionSelect={onSortOptionSelect}
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
                brand: { state: brandsState, reset: resetBrandState },
                sortOption: {
                  default: defaultSortOption,
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
