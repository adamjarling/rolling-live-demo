import PropTypes from "prop-types";
import React from "react";
import Nav from "./Nav";

const Header = ({ siteTitle }) => (
  <header className="container">
    <Nav />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
