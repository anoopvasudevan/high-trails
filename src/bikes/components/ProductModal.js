import React from "react";
// import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";

// import Backdrop from "../../shared/components/UIElements/Backdrop";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/UIElements/Button";
import classes from "./ProductModal.module.css";

const ProductModalOverlay = (props) => {
  const modalPositionTop = window.scrollY + 0.05 * window.innerHeight;

  const content = (
    <div
      className={`${classes.ProductModal} ${props.className}`}
      // style={props.style}
      style={{ top: `${modalPositionTop}px` }}
    >
      <div className={classes.ProductDisplay}>
        <div className={classes.ProductAbout}>
          <div className={classes.ProductImage}>
            <img src={props.product.image} alt={props.product.name} />
          </div>
          <h3 className={classes.ProductTitle}>{props.product.name}</h3>
          <p className={classes.ProductDesc}>
            All too often, corners are cut to meet price-points in the
            entry-level road bike market, but the Allez redefines what it means
            to be: "entry level." Focusing on weight, refinement, and
            reliability like nothing else in its class, the Allez is the first
            to make these technologies accessible to everyone.{" "}
          </p>
        </div>

        <div className={classes.ProductInfo}>
          <div>
            <h3 className={classes.ProductInfoTitle}>Product Details</h3>
            <div className={classes.ProductSpecGroup}>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Category</span>
                <span className={classes.ProductSpecValue}>Mountain</span>
              </p>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Size</span>
                <span className={classes.ProductSpecValue}>40</span>
              </p>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Manufacturer</span>
                <span className={classes.ProductSpecValue}>Raleigh</span>
              </p>
              <p className={classes.ProductSpec}>
                <span className={classes.ProductSpecName}>Price</span>
                <span className={classes.ProductSpecValue}>Rs. 4000</span>
              </p>
            </div>
          </div>
          <Button size="medium">Book yours now</Button>
        </div>
      </div>
    </div>
  );
    return content;
  // return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const ProductModal = (props) => {
  return (
    <>
      <Modal show={props.show} onCancel={props.onCancel}>
        <ProductModalOverlay {...props} />
      </Modal>
    </>
  );
};
// const ProductModal = (props) => {
//   return (
//     <>
//       {props.show && (
//         <Backdrop onClick={props.onCancel} style={{ zIndex: "900" }} />
//       )}
//       <CSSTransition
//         in={props.show}
//         mountOnEnter
//         unmountOnExit
//         timeout={200}
//         classNames={{
//           enter: classes.ProductModalEnter,
//           enterActive: classes.ProductModalEnterActive,
//           exit: classes.ProductModalExit,
//           exitActive: classes.ProductModalExitActive,
//         }}
//       >
//         <ProductModalOverlay {...props} />
//       </CSSTransition>
//     </>
//   );
// };

export default ProductModal;
