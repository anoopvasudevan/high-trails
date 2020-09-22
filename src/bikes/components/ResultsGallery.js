import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import classes from "./ResultsGallery.module.css";

const ResultsGallery = (props) => {
  return (
    <div className={classes.ResultsGallery}>
      {props.results.map((result, index) => {
        return (
          <React.Fragment key={index}>
            <Card
              //   customClass={classes.ResultsGalleryImage}
              image={result.image}
              title={result.name}
              subTitle={`Rs. ${result.price}`}
            >
              <Button size="xsmall" onClick={props.onClick}>
                Details
              </Button>
            </Card>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ResultsGallery;
