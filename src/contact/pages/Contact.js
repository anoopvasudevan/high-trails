import React from "react";

import Container from "../../shared/components/Container";
import Button from "../../shared/components/UIElements/Button";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <article className={classes.Contact}>
      <section className={classes.WrapperSection}>
        <Container>
          <section className={classes.ContactUs}>
            <h4 className={classes.Section__title}>Contact Us</h4>
            <p className={classes.Section__highlight}>
              Visit one of our stores for sales. Give us a call for service &
              enquiries
            </p>

            <div className={classes.PhoneCard}>
              <i className="fas fa-phone-alt"></i>
              <p className={classes.PhoneNumber}>+91 9895 111 222</p>
              <p className={classes.PhoneNumber}>+91 9895 111 222</p>
            </div>

            <div className={classes.AddressCard}>
              <i className="fas fa-map-marker-alt"></i>
              <div className={classes.Address}>
                <p>SBR Complex</p>
                <p>Sarjapura - Attibele Road</p>
                <p>Bidaraguppe</p>
                <p>Bengaluru, Karnataka 562107</p>
                <p>India</p>
              </div>
              <div className={classes.Address}>
                <p>SBR Complex</p>
                <p>Sarjapura - Attibele Road</p>
                <p>Bidaraguppe</p>
                <p>Bengaluru, Karnataka 562107</p>
                <p>India</p>
              </div>
            </div>
          </section>

          <section className={classes.ReviewUs}>
            <h4 className={classes.Section__title}>Share your comments</h4>
            <form className={classes.ReviewForm}>
              <div className={classes.FormItem}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
              </div>

              <div className={classes.FormItem}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>

              <div className={classes.FormItem}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Message" />
              </div>

              <Button type="submit" size="small">
                Send
              </Button>
            </form>
          </section>
        </Container>
      </section>
      <FooterOverlay />
    </article>
  );
};

export default Contact;
