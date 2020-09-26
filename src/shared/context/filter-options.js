import React, { createContext, useState } from "react";

import { useOptionsState } from "../hooks/useOptionsState";
import { useApplyFilters } from "../hooks/useApplyFilters.js";
import { SORT_OPTIONS } from "../../bikes/components/ProductsCatalogue";

export const FilterOptionsStatusContext = createContext({
  categoriesState: {},
  updateCategoryState: () => {},
  resetCategoryState: () => {},
  brandsState: {},
  updateBrandsState: () => {},
  resetBrandsState: () => {},
  sortOptionsState: {},
  updateSortOptionsState: () => {},
  resetSortOptionState: () => {},
  filteredProducts: [],
  searchQuery: "",
  setSearchQuery: () => {},
});

const FilterOptionsContextProvider = (props) => {
  const { products, children } = props;
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(products);

  const categories = new Set();
  const brands = new Set();
  products.forEach((product) => {
    categories.add(product.category);
    brands.add(product.make);
  });

  const extractedSortOptions = SORT_OPTIONS.map((option) => option.name);
  const defaultSortOption = extractedSortOptions[0];
  const {
    optionsState: categoriesState,
    updateOption: updateCategoryState,
    resetOptionsStatus: resetCategoryState,
  } = useOptionsState([...categories]);

  const {
    optionsState: brandsState,
    updateOption: updateBrandsState,
    resetOptionsStatus: resetBrandsState,
  } = useOptionsState([...brands]);

  const {
    optionsState: sortOptionsState,
    updateOption: updateSortOptionsState,
    resetCurrOption: resetSortOptionsState,
  } = useOptionsState(extractedSortOptions, defaultSortOption);

  let filteredProducts = useApplyFilters(
    categoriesState,
    brandsState,
    sortOptionsState,
    products
  );
  // console.log("Filtered");
  // console.log(filteredProducts);

  filteredProducts = filteredProducts.filter(
    (product) =>
      product.name.toLowerCase().indexOf(searchQuery.trim().toLowerCase()) !==
      -1
  );

  // console.log("FilterOptionsStatusContext - rendering");
  return (
    <FilterOptionsStatusContext.Provider
      value={{
        categoriesState,
        updateCategoryState,
        resetCategoryState,
        brandsState,
        updateBrandsState,
        resetBrandsState,
        sortOptionsState,
        updateSortOptionsState,
        resetSortOptionsState,
        filteredProducts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FilterOptionsStatusContext.Provider>
  );
};

export default FilterOptionsContextProvider;
