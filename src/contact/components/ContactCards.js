import React from "react";

import classes from "./ContactCards.module.css";

const PHONE_NOS = ["+91 9895 111 222", "+91 9895 111 222"];
const ADDRESSES = [
  {
    line1: "SBR Complex",
    line2: "Sarjapura - Attibele Road",
    line3: "Bidaraguppe",
    line4: "Bengaluru, Karnataka 562107",
    line5: "",
  },
  {
    line1: "SBR Complex",
    line2: "Sarjapura - Attibele Road",
    line3: "Bidaraguppe",
    line4: "Bengaluru, Karnataka 562107",
    line5: "",
  },
];


const PhoneIcon = (
  <div className={classes.CardIcon}>
    <i className="fas fa-phone-alt"></i>
  </div>
);

const AddressIcon = (
  <div className={classes.CardIcon}>
    <i className="fas fa-map-marker-alt"></i>
  </div>
);

const PhoneNumbers = PHONE_NOS.map((phoneNumber, index) => (
  <p key={index} className={classes.PhoneNumber}>
    {phoneNumber}
  </p>
));

const Addresses = ADDRESSES.map((address, index) => (
  <div key={index} className={classes.Address}>
    <p>{address.line1}</p>
    <p>{address.line2}</p>
    <p>{address.line3}</p>
    <p>{address.line4}</p>
  </div>
));

export const PhoneCard = () => {
  return (
    <div className={classes.PhoneCard}>
      {PhoneIcon}
      {PhoneNumbers}
    </div>
  );
};

export const AddressCard = () => {
  return (
    <div className={classes.AddressCard}>
      {AddressIcon}
      <div className={classes.AddressContainer}>{Addresses}</div>
    </div>
  );
};

export const FooterPhoneCard = () => {
  return (
    <div className={`${classes.PhoneCard} ${classes.FooterPhoneCard}`}>
      {PhoneIcon}
      {PhoneNumbers}
    </div>
  );
};

export const FooterAddressCard = () => {
  return (
    <div className={`${classes.AddressCard} ${classes.FooterAddressCard}`}>
      {AddressIcon}
      <div className={classes.AddressContainer}>{Addresses}</div>
    </div>
  );
};
