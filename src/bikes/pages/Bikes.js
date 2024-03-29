import React, { useState, useEffect } from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import ProductSearchControls from "../components/ProductSearchControls";
import ProductSearchResults from "../components/ProductSearchResults";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import FilterOptionsContextProvider from "../../shared/context/filter-options";
import { useHttpClient } from "../../shared/hooks/useHttpClient";

import classes from "./Bikes.module.css";

const Bikes = (props) => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  // console.log(loadedProducts);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/bikes");

        setLoadedProducts(responseData.bikes);
      } catch (err) {}
    };

    fetchBikes();
  }, [sendRequest]);

  // console.log('Bikes - rendering')
  return (
    <>
      <ErrorModal error={error} onCancel={clearError} />

      <PageWrapper>
        {isLoading && <LoadingSpinner />}

        {!isLoading && loadedProducts.length && (
          <FilterOptionsContextProvider products={loadedProducts}>
            <div className={classes.FlexContainer}>
              <ProductSearchControls />

              <div className={classes.SearchResults}>
                <ProductSearchResults
                  totalLoadedProducts={loadedProducts.length}
                />
              </div>
            </div>
          </FilterOptionsContextProvider>
        )}
      </PageWrapper>
    </>
  );
};

export default Bikes;
