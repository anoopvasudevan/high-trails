import React from "react";

import { useBreakpoints } from "../../shared/hooks/useBreakpoints";
import ImageColumn from "./ImageColumn";

import event1 from "../../assets/images/events/event1.jpeg";
import event2 from "../../assets/images/events/event2.jpeg";
import event3 from "../../assets/images/events/event3.jpeg";
import event4 from "../../assets/images/events/event4.jpeg";
import event5 from "../../assets/images/events/event5.jpeg";
import event6 from "../../assets/images/events/event6.jpeg";
import event7 from "../../assets/images/events/event7.jpeg";
import event8 from "../../assets/images/events/event8.jpeg";
import event9 from "../../assets/images/events/event9.jpeg";
import classes from "./ImageGallery.module.css";

const ALL_PHOTOS = [
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7,
  event8,
  event9,
  event3,
  event4,
  event5,
  event6,
];

const ImageGallery = () => {
  const windowSize = useBreakpoints(703, 1135, 1525);
  // console.log(windowSize);
  let noOfColumns = 1;
  if (windowSize === "x-small") noOfColumns = 1;
  if (windowSize === "small") noOfColumns = 2;
  if (windowSize === "medium") noOfColumns = 3;
  if (windowSize === "large") noOfColumns = 4;

  const imagesPerColumn = Math.floor(ALL_PHOTOS.length / noOfColumns);
  let remainingImages = ALL_PHOTOS.length % noOfColumns;

  const galleryColumns = [];
  let extra = 0;
  for (let i = 0; i < ALL_PHOTOS.length; ) {
    if (remainingImages > 0) {
      extra = 1;
      --remainingImages;
    }
    galleryColumns.push(
      <ImageColumn
        key={i}
        images={ALL_PHOTOS.slice(i, i + imagesPerColumn + extra)}
      />
    );

    i = i + imagesPerColumn + extra;
    extra = 0;
  }

  return <div className={classes.GalleryWrapper}>{galleryColumns}</div>;
};

export default ImageGallery;
