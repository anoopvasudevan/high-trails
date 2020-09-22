import { createContext } from "react";

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
});
