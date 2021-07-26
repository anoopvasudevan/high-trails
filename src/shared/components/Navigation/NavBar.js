import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import NavDropdown from "./NavDropdown";
import MenuToggleButton from "../UIElements/MenuToggleButton";
import Backdrop from "../UIElements/Backdrop";
import Logo from "../../../assets/images/ht-logo.png";
import Container from "../Container";

import "./NavBar.css";

const NavBar = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const windowScrolledHandler = useCallback(
    (e) => {
      if (window.scrollY > 0) {
        if (!scrolled) setScrolled(true);
      } else setScrolled(false);
    },
    [scrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", windowScrolledHandler);
    return () => {
      window.removeEventListener("scroll", windowScrolledHandler);
    };
  }, [windowScrolledHandler]);

  const dropdownMenuHandler = () => {
    setOpenDropdownMenu((currState) => !currState);
  };

  const logoClickedHandler = () => {
    setOpenDropdownMenu(false);
  };

  return (
    <header className={`Header ${scrolled && !openDropdownMenu && "Scrolled"}`}>
      <Container>
        {/* below div with position:relative for nav dropdown */}
        <div style={{ position: "relative" }}>
          <div className="NavBar">
            <Link to="/" className="NavBar__logo" onClick={logoClickedHandler}>
              <img
                className="NavBar__logo-img"
                src={Logo}
                alt="HT Logo"
                tabIndex="-1"
              />
            </Link>

            <nav className="NavBar__main-nav">
              <NavLinks />
            </nav>

            <div className="NavBar__menu-btn">
              <MenuToggleButton
                clicked={dropdownMenuHandler}
                menuOpen={openDropdownMenu}
              />
            </div>
          </div>

          <NavDropdown show={openDropdownMenu}>
            <nav>
              <NavLinks onClick={dropdownMenuHandler} />
            </nav>
            
          </NavDropdown>

          {openDropdownMenu && <Backdrop onClick={dropdownMenuHandler} />}
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
