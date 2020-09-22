import { useOptionsState } from "./useOptionsState";

import {
  //   ALL_PRODUCTS,
  // CATEGORY_OPTIONS,
  // BRANDS,
  SORT_OPTIONS,
} from "../../bikes/components/ProductsCatalogue";

export const useBuildOptionState = (products) => {
  
  const categories = [];
  const brands = [];
  products.forEach((product) => {
    categories.push(product.category);
    brands.push(product.make);
  });

  console.log(categories);
  console.log(brands);


  const extractedSortOptions = SORT_OPTIONS.map((option) => option.name);
  const defaultSortOption = extractedSortOptions[0];
  const {
    optionsState: categoriesState,
    updateOption: updateCategoryState,
    resetOptionsStatus: resetCategoryState,
  } = useOptionsState(categories);

  const {
    optionsState: brandsState,
    updateOption: updateBrandsState,
    resetOptionsStatus: resetBrandsState,
  } = useOptionsState(brands);

  const {
    optionsState: sortOptionsState,
    updateOption: updateSortOptionsState,
    resetCurrOption: resetSortOptionsState,
  } = useOptionsState(extractedSortOptions, defaultSortOption);

  return {
    categoriesState,
    updateCategoryState,
    resetCategoryState,
    brandsState,
    updateBrandsState,
    resetBrandsState,
    sortOptionsState,
    updateSortOptionsState,
    resetSortOptionsState,
  };
};
