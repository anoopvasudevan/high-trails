import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "../../shared/components/Container";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import ProductSearchControls from "../components/ProductSearchControls";
import ResultsGallery from "../components/ResultsGallery";
import ProductModal from "../components/ProductModal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import { useBuildOptionState } from "../../shared/hooks/useBuildOptionState";
import { useApplyFilters } from "../../shared/hooks/useApplyFilters";
import { FilterOptionsStatusContext } from "../../shared/context/filter-options";
import { useHttpClient } from "../../shared/hooks/useHttpClient";

import { ALL_PRODUCTS } from "../components/ProductsCatalogue";

import classes from "./Bikes.module.css";

const Bikes = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState(ALL_PRODUCTS);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/bikes");
        console.log(responseData);
        setLoadedProducts(responseData.bikes);
      } catch (err) {}
    };

    fetchBikes();
  }, [sendRequest]);

  const optionsState = { ...useBuildOptionState(loadedProducts) };
  const { categoriesState, brandsState, sortOptionsState } = optionsState;

  const showProductHandler = () => {
    setShowProduct(true);
  };

  const cancelProductHandler = () => {
    setShowProduct(false);
  };

  const searchProductHandler = useCallback((query) => {
    const searchResults = ALL_PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().indexOf(query.trim().toLowerCase()) !== -1
    );
    setLoadedProducts(searchResults);
  }, []);

  const filteredProducts = useApplyFilters(
    categoriesState,
    brandsState,
    sortOptionsState,
    loadedProducts
  );

  let displayMessage = "";
  if (filteredProducts.length) {
    displayMessage = (
      <p className={classes.BikesDisplaySummary}>
        Displaying {filteredProducts.length} of {loadedProducts.length} products
      </p>
    );
  } else {
    displayMessage = (
      <p className={classes.BikesDisplaySummary}>
        We are sorry, we cannot find any matches right now. Please{" "}
        <Link to="/contact">contact us</Link> for assistance.
      </p>
    );
  }

  return (
    <>
      <ErrorModal error={error} onCancel={clearError} />
      <article className={classes.Bikes}>
        <section className={classes.WrapperSection}>
          <Container>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
              <div className={classes.FlexContainer}>
                <FilterOptionsStatusContext.Provider
                  value={{
                    ...optionsState,
                  }}
                >
                  <ProductSearchControls onSearch={searchProductHandler} />
                </FilterOptionsStatusContext.Provider>

                <div className={classes.SearchResults}>
                  {displayMessage}
                  <ResultsGallery
                    results={filteredProducts}
                    onClick={showProductHandler}
                  />
                </div>
              </div>
            )}
          </Container>
        </section>
        <FooterOverlay />
      </article>

      <ProductModal
        show={showProduct}
        onCancel={cancelProductHandler}
        product={ALL_PRODUCTS[0]}
      />
    </>
  );
};

export default Bikes;
