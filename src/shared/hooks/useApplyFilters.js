import { SORT_OPTIONS } from "../../bikes/components/SortOptions";

export const useApplyFilters = (...args) => {
  const [categoriesState, brandsState, sortOptionsState, loadedProducts] = args;

  const categoryFilters = [];
  for (const key in categoriesState.optionsStatus) {
    if (categoriesState.optionsStatus[key]) categoryFilters.push(key);
  }
  const brandFilters = [];
  for (const key in brandsState.optionsStatus) {
    if (brandsState.optionsStatus[key]) brandFilters.push(key);
  }

  let filteredProducts = loadedProducts;

  if (categoryFilters.length) {
    filteredProducts = loadedProducts.filter(
      (product) => categoryFilters.indexOf(product.category) !== -1
    );
  }
  if (brandFilters.length) {
    filteredProducts = filteredProducts.filter(
      (product) => brandFilters.indexOf(product.make) !== -1
    );
  }

  const { field: sortField, order: sortOrder } = SORT_OPTIONS.find(
    (option) => option.name === sortOptionsState.currOption
  );

  filteredProducts.sort((productA, productB) => {
    if (sortOrder === "Ascending") {
      return productA[sortField] > productB[sortField] ? 1 : -1;
    }

    if (sortOrder === "Descending") {
      return productA[sortField] > productB[sortField] ? -1 : 1;
    }

    return 0;
  });

  // console.log("useApplyFilters - rendering");

  return filteredProducts;
};
