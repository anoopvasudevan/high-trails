import React from "react";

import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/UIElements/Button";
import classes from "./ProductModal.module.css";

const images = [
  "https://images.unsplash.com/photo-1588879169484-8fe78d21080a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
  "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1570169043013-de63774bbf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1567448400815-59d0a6cdb52d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1561642445-b789b9a7e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",
  "https://images.unsplash.com/photo-1574965234283-2f20a4cffa43?ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80",
];

const ProductModalOverlay = (props) => {
  const modalPositionTop = window.scrollY + 0.05 * window.innerHeight;
  const { product } = props;
  // console.log("ProductModalOverlay rendering");
  const content = (
    <div
      className={`${classes.ProductModal} ${props.className}`}
      // style={props.style}
      style={{ top: `${modalPositionTop}px` }}
    >
      <div className={classes.ProductDisplay}>
        <div className={classes.ProductAbout}>
          <div className={classes.ProductImage}>
            <img src={product.image} alt={product.name} />
          </div>
          <h3 className={classes.ProductTitle}>{product.name}</h3>
          <p className={classes.ProductDesc}>{product.description}</p>
        </div>

        <div className={classes.ProductInfo}>
          <div>
            <h3 className={classes.ProductInfoTitle}>Product Details</h3>
            <div className={classes.ProductSpecGroup}>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Category</span>
                <span className={classes.ProductSpecValue}>
                  {product.category}
                </span>
              </p>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Size</span>
                <span className={classes.ProductSpecValue}>{product.size}</span>
              </p>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Manufacturer</span>
                <span className={classes.ProductSpecValue}>{product.make}</span>
              </p>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Price</span>
                <span className={classes.ProductSpecValue}>
                  Rs. {product.price}
                </span>
              </p>
            </div>
          </div>
          <Button>Book yours now</Button>
        </div>
      </div>
    </div>
  );
  return content;
};

const ProductModal = (props) => {
  // console.log("ProductModal - rendering");
  return (
    <>
      <Modal show={props.show} onCancel={props.onCancel}>
        <ProductModalOverlay {...props} />
      </Modal>
    </>
  );
};

export default ProductModal;
