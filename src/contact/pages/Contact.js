import React from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import CommentsForm from "../components/CommentsForm";
import SocialIcons from "../../shared/components/SocialIcons";
import { PhoneCard, AddressCard } from "../components/ContactCards";
import classes from "./Contact.module.css";

// const PHONE_NOS = ["+91 9895 111 222", "+91 9895 111 222"];
// const ADDRESSES = [
//   {
//     line1: "SBR Complex",
//     line2: "Sarjapura - Attibele Road",
//     line3: "Bidaraguppe",
//     line4: "Bengaluru, Karnataka 562107",
//     line5: "",
//   },
//   {
//     line1: "SBR Complex",
//     line2: "Sarjapura - Attibele Road",
//     line3: "Bidaraguppe",
//     line4: "Bengaluru, Karnataka 562107",
//     line5: "",
//   },
// ];

const Contact = () => {
  return (
    <PageWrapper>
      <div className={classes.ContactWrapper}>
        <section className={classes.ContactUs}>
          <h4 className={classes.Section__title}>Contact Us</h4>
          <p className={classes.Section__highlight}>
            Visit one of our stores for sales. Give us a call for service &
            enquiries
          </p>
          <PhoneCard />
          <AddressCard />
          {/* <ContactCards phoneNumbers={PHONE_NOS} addresses={ADDRESSES} /> */}
        </section>

        <section className={classes.ReviewUs}>
          <h4 className={classes.Section__title}>Comments</h4>
          <p className={classes.Section__highlight}>
            Share your experience shopping with us
          </p>
          <CommentsForm />
        </section>
      </div>

      <section className={classes.FollowUs}>
        <h4 className={classes.Section__title}>Follow Us</h4>
        <p className={classes.Section__highlight}>
          Follow us to get updates on new bikes, events and more
        </p>
        <div className={classes.SocialIcons}>
          <SocialIcons style={{ fontSize: "36px" }} />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
