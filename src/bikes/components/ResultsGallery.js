import React, { useState } from "react";

import ProductModal from "./ProductModal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import classes from "./ResultsGallery.module.css";

const ResultsGallery = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState({});

  const showProductHandler = (productId) => {
    const product = products.filter((product) => product.id === productId);
    setSelectedProduct(product[0]);
  };

  const cancelProductHandler = () => {
    setSelectedProduct({});
  };

  return (
    <>
      <div className={classes.ResultsGallery}>
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Card
                image={product.image}
                title={product.name}
                subTitle={`Rs. ${product.price}`}
                onClick={() => showProductHandler(product.id)}
                customClass={classes.ResultsGallery__card}
              >
                <Button
                  size="xsmall"
                  onClick={() => showProductHandler(product.id)}
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
    </>
  );
};

export default ResultsGallery;
