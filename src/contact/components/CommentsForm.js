import React from 'react';

import Button from "../../shared/components/UIElements/Button";
import classes from "./CommentsForm.module.css";

const ContactForm = () => {
    return (
      <form className={classes.CommentsForm}>
        <div className={classes.FormItem}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" autoComplete="false" />
        </div>

        <div className={classes.FormItem}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="mmm" />
        </div>

        <div className={classes.FormItem}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" />
        </div>

        <Button type="submit" size="small">
          Send
        </Button>
      </form>
    );
}

export default ContactForm
