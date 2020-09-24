import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import ProductModal from "../components/ProductModal";
import { FilterOptionsStatusContext } from "../../shared/context/filter-options";
import classes from "./ResultsGallery.module.css";

const ResultsGallery = (props) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { filteredProducts } = useContext(FilterOptionsStatusContext);

  const showProductHandler = (index) => {
    setSelectedProduct(filteredProducts[index]);
  };

  const cancelProductHandler = () => {
    setSelectedProduct({});
  };

  let displayMessage = "";
  if (filteredProducts.length) {
    displayMessage = (
      <p className={classes.BikesDisplaySummary}>
        Displaying {filteredProducts.length} of {props.totalLoadedProducts}{" "}
        products
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

  // console.log("ResultsGallery - rendering");
  return (
    <React.Fragment>
      {displayMessage}
      <div className={classes.ResultsGallery}>
        {filteredProducts.map((product, index) => {
          return (
            <React.Fragment key={index}>
              <Card
                image={product.image}
                title={product.name}
                subTitle={`Rs. ${product.price}`}
              >
                <Button
                  size="xsmall"
                  onClick={showProductHandler.bind(null, index)}
                >
                  Details
                </Button>
              </Card>
            </React.Fragment>
          );
        })}
      </div>

      <ProductModal
        show={!!Object.keys(selectedProduct).length}
        onCancel={cancelProductHandler}
        product={selectedProduct}
      />
    </React.Fragment>
  );
};

export default ResultsGallery;
