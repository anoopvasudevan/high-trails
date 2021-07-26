import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";

import ResultsGallery from "./ResultsGallery";
import Pagination from "./Pagination";
import { FilterOptionsStatusContext } from "../../shared/context/filter-options";
import classes from "./ProductSearchResults.module.css";

const ProductSearchResults = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const { filteredProducts } = useContext(FilterOptionsStatusContext);

  const paginate = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  let displayMessage = "";
  if (filteredProducts.length) {
    displayMessage = (
      <p className={classes.ProductsDisplaySummary}>
        Displaying {filteredProducts.length} of {props.totalLoadedProducts}{" "}
        products
      </p>
    );
  } else {
    displayMessage = (
      <p className={classes.ProductsDisplaySummary}>
        We are sorry, we cannot find any matches right now. Please{" "}
        <Link to="/contact">contact us</Link> for assistance.
      </p>
    );
  }

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const products = filteredProducts.slice(firstProductIndex, lastProductIndex);

  // console.log("ProductSearchResults - rendering");
  let paginationComponent;
  if (filteredProducts.length) {
    paginationComponent = (
      <Pagination
        itemsPerPage={productsPerPage}
        totalItems={filteredProducts.length}
        paginate={paginate}
        currPage={currentPage}
      />
    );
  }

  return (
    <React.Fragment>
      <div className={classes.DisplayBar}>
        {displayMessage}
        {paginationComponent}
      </div>
      <ResultsGallery products={products} />

      <div className={classes.Pagination__bottom}>{paginationComponent}</div>
    </React.Fragment>
  );
};

export default ProductSearchResults;
