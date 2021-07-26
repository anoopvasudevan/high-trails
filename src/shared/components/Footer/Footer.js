import React from "react";

import Container from "../Container";
import {
  FooterPhoneCard,
  FooterAddressCard,
} from "../../../contact/components/ContactCards";
import SocialIcons from "../SocialIcons";
import NavLinks from "../Navigation/NavLinks"
import classes from "./Footer.module.css";
import Logo from "../../../assets/images/ht-logo.png";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Container>
        <div className={classes.FooterInfo}>
          <div className={classes.Contact}>
            <p className={classes.Title}>Contact us</p>
            <FooterPhoneCard />
            <FooterAddressCard />
          </div>

          <div className={classes.Follow}>
            <p className={classes.Title}>Follow us</p>
            <div className={classes.SocialIcons}>
              <SocialIcons
                style={{ fontSize: "24px", padding: "0", color: "gray" }}
              />
            </div>
            <nav className={classes.FooterNav}>
              <p className={classes.Title}>Site Map</p>
              <NavLinks footer />
            </nav>
          </div>

          <div className={classes.Logo}>
            <img className={classes.LogoImg} src={Logo} alt="HT Logo" />
          </div>
        </div>
      </Container>
      <div className={classes.Copyright}>
        <p className={classes.Item}>© 2020 High Trails. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

//Backup

// import React from "react";

// import Container from "../Container";
// import {
//   PhoneCard,
//   AddressCard,
// } from "../../../contact/components/ContactCards";
// import SocialIcons from "../SocialIcons";
// import classes from "./Footer.module.css";
// import Logo from "../../../assets/images/ht-logo.png";

// const Footer = () => {
//   return (
//     <footer className={classes.Footer}>
//       <Container>
//         <div className={classes.FooterInfo}>
//           <div className={classes.Contact}>
//             <h5 className={classes.Title}>Contact us</h5>
//             <PhoneCard />
//             <AddressCard />
//           </div>

//           <div className={classes.Follow}>
//             <h5 className={classes.Title}>Follow us</h5>
//             <SocialIcons style={{ fontSize: "24px" }} />
//           </div>

//           <img className={classes.Logo} src={Logo} alt="HT Logo" />
//         </div>
//       </Container>
//       <div className={classes.Copyright}>
//         <p className={classes.Item}>© 2020 High Trails. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
