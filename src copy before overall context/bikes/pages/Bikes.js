import React, { useState, useCallback } from "react";

import Container from "../../shared/components/Container";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import ProductSearchControls from "../components/ProductSearchControls";
import ResultsGallery from "../components/ResultsGallery";
import ProductModal from "../components/ProductModal";
import { useOptionsState } from "../../shared/hooks/useOptionsState";
import { FilterOptionsStatusContext } from "../../shared/context/filter-options";

import bikeImg from "../../assets/images/brands.jpg";
import classes from "./Bikes.module.css";

const ALL_PRODUCTS = [
  {
    name: "Hero Sprint",
    price: 3000,
    image: bikeImg,
    category: "BMX",
    brand: "Hero",
  },
  {
    name: "Level",
    price: 2000,
    image: bikeImg,
    category: "Road",
    Bband: "Level",
  },
  {
    name: "Raleigh Urban",
    price: 3050.5,
    image: bikeImg,
    category: "Road",
    brand: "Raleigh",
  },
  {
    name: "Hero Hybrid",
    price: 1200,
    image: bikeImg,
    category: "Hybrid",
    brand: "Hero",
  },
  {
    name: "Frog Lightner",
    price: 30000,
    image: bikeImg,
    category: "Mountain",
    brand: "Frog",
  },
  {
    name: "Raleigh Roadster",
    price: 4500,
    image: bikeImg,
    category: "Road",
    brand: "Raleigh",
  },
];

const SORT_OPTIONS = [
  { name: "Price: Low to High", field: "price", order: "Ascending" },
  { name: "Price: High to Low", field: "price", order: "Descending" },
  { name: "Brands: A to Z", field: "brand", order: "Ascending" },
  { name: "Brands: Z to A", field: "brand", order: "Descending" },
];

const CATEGORY_OPTIONS = ["Mountain", "Road", "BMX", "Hybrid"];
const BRANDS = ["Hero", "Octane", "Frog", "Level"];

const Bikes = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState(ALL_PRODUCTS);
  // // const [filteredProducts, setfilteredProducts] = useState(ALL_PRODUCTS);

  // filter & sort state management

  const extractedSortOptions = SORT_OPTIONS.map((option) => option.name);
  const defaultSortOption = extractedSortOptions[0];
  const {
    optionsState: categoriesState,
    updateOption: updateCategoryState,
    resetOptionsStatus: resetCategoryState,
  } = useOptionsState(CATEGORY_OPTIONS);

  const {
    optionsState: brandsState,
    updateOption: updateBrandsState,
    resetOptionsStatus: resetBrandsState,
  } = useOptionsState(BRANDS);

  const {
    optionsState: sortOptionsState,
    updateOption: updateSortOptionsState,
    resetCurrOption: resetSortOptionsState,
  } = useOptionsState(extractedSortOptions, defaultSortOption);

  // filter & sort state management

  const showProductHandler = () => {
    setShowProduct(true);
  };

  const cancelProductHandler = () => {
    setShowProduct(false);
  };

  const searchProductHandler = (query) => {
    // now it is searching only the loaded products
    const searchResults = ALL_PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().indexOf(query.trim().toLowerCase()) !== -1
    );
    // console.log(query.trim());
    // console.log(searchResults);
    setLoadedProducts(searchResults);
  };

  

  const filterProductHandler = useCallback((filterType, filterValues) => {
    let filteredResults = [];

    if (filterType === "Categories") {
      filteredResults = ALL_PRODUCTS.filter(
        (product) => filterValues.indexOf(product.category) !== -1
      );
    }

    if (filterType === "Brands") {
      filteredResults = ALL_PRODUCTS.filter(
        (product) => filterValues.indexOf(product.brand) !== -1
      );
    }

    setLoadedProducts(filteredResults);
  }, []);

  const sortProductsHandler = useCallback((sortOption) => {
    const { field: sortField, order: sortOrder } = SORT_OPTIONS.find(
      (option) => option.name === sortOption
    );
    // console.log(sortField, sortOrder);
    // to be re-written
    const sortedResults = loadedProducts.slice().sort((a, b) => {
      // console.log(a[sortField]);
      // console.log(b[sortField]);
      if (sortOrder === "Ascending") {
        if (a[sortField] > b[sortField]) return 1;
        else return -1;
      }
      if (sortOrder === "Descending") {
        if (a[sortField] > b[sortField]) return -1;
        else return 1;
      }
      return 0;
    });
    // console.log(sortedResults);
    setLoadedProducts(sortedResults);
  }, []);

  return (
    <>
      <article className={classes.Bikes}>
        <section className={classes.WrapperSection}>
          <Container>
            <div className={classes.FlexContainer}>
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
                }}
              >
                <ProductSearchControls onSearch={searchProductHandler} />
              </FilterOptionsStatusContext.Provider>

              <div className={classes.SearchResults}>
                <p className={classes.BikesDisplaySummary}>
                  Displaying all bikes (42)
                </p>
                <ResultsGallery
                  results={loadedProducts}
                  onClick={showProductHandler}
                />
              </div>
            </div>
          </Container>
        </section>
        <FooterOverlay />
      </article>

      {/* {showProduct && <ProductModal />} */}
      <ProductModal
        show={showProduct}
        onCancel={cancelProductHandler}
        product={ALL_PRODUCTS[0]}
      />
    </>
  );
};

export default Bikes;
