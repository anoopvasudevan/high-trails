import React from "react";

import ActiveFilter from "./ActiveFilter";
import classes from "./ActiveFilters.module.css";

const ActiveFilters = (props) => {
  const { category, brand, sortOption } = props.filters;

  let activeCategoryFilters = [];
  for (const option in category.state.optionsStatus) {
    if (category.state.optionsStatus[option])
      activeCategoryFilters.push(option);
  }

  let activeBrandFilters = [];
  for (const option in brand.state.optionsStatus) {
    if (brand.state.optionsStatus[option]) activeBrandFilters.push(option);
  }

  let activeSortOption = sortOption.state.currOption;

  const resetCategoryFilter = (name) => {
    category.reset(name);
  };

  const resetBrandFilter = (name) => {
    brand.reset(name);
  };

  const resetSortOption = (name) => {
    sortOption.reset(sortOption.default);
  };

  return (
    <React.Fragment>
      {activeCategoryFilters.length !== 0 && (
        <p className={classes.ActiveFilters__title}>Categories:</p>
      )}

      <div className={classes.ActiveFilters}>
        {activeCategoryFilters.map((category, index) => (
          <ActiveFilter
            key={index}
            filterName={category}
            filterReset={resetCategoryFilter}
          />
        ))}
      </div>

      {activeBrandFilters.length !== 0 && (
        <p className={classes.ActiveFilters__title}>Brands:</p>
      )}

      <div className={classes.ActiveFilters}>
        {activeBrandFilters.map((brand, index) => (
          <ActiveFilter
            key={index}
            filterName={brand}
            filterReset={resetBrandFilter}
          />
        ))}
      </div>

      {activeSortOption !== "" && activeSortOption !== sortOption.default && (
        <>
          <p className={classes.ActiveFilters__title}>Sorted:</p>
          <div className={classes.ActiveFilters}>
            <ActiveFilter
              filterName={activeSortOption}
              filterReset={resetSortOption}
            />
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default ActiveFilters;
