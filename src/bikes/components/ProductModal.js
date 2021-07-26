import React from "react";

import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/UIElements/Button";
import Carousal from "../../shared/components/UIElements/Carousal";
import classes from "./ProductModal.module.css";

const ProductModalOverlay = (props) => {
  const modalPositionTop = window.scrollY + 0.05 * window.innerHeight;
  const { product } = props;

  const imageSlides = product.images.map((image, index) => (
    <img key={index} src={image} alt="Product" />
  ));
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
            {/* <img src={product.image} alt={product.name} /> */}
            <Carousal
              slides={imageSlides}
              // wrapper={useStyledTestimonial}
              slidesPerPage={1}
              btnLeft={<i className="fas fa-angle-double-left"></i>}
              btnRight={<i className="fas fa-angle-double-right"></i>}
              style={{height: "min(50vh, 50vw)" }}
            />
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
  let productModalOverlay = <></>;
  if(props.show) productModalOverlay = <ProductModalOverlay {...props} />;
  return (
    <>
      <Modal show={props.show} onCancel={props.onCancel}>
        {productModalOverlay}
      </Modal>
    </>
  );
};

export default ProductModal;
