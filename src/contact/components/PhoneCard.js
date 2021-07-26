import React from 'react';

import classes from "./PhoneCard.module.css";

const PhoneCard = () => {
    return (
      <div className={classes.PhoneCard}>
        <div className={classes.CardIcon}>
          <i className="fas fa-phone-alt"></i>
        </div>
        {phoneNumbers.map((phoneNumber, index) => (
          <p key={index} className={classes.PhoneNumber}>
            {phoneNumber}
          </p>
        ))}
      </div>
    );
}

export default PhoneCard
