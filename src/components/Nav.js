import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "gatsby";
import logo from "../images/rls-logo2.png";

var socialLinks = [
  {
    icon: <FaFacebook />,
    service: "Facebook",
    url: "#",
  },
  {
    icon: <FaInstagram />,
    service: "Instagram",
    url: "#",
  },
  {
    icon: <FaLinkedin />,
    service: "Linked In",
    url: "#",
  },
  {
    icon: <FaEnvelope />,
    service: "Email",
    url: "mailto:nate@rollinglivestudios.com",
  },
];

export default function Nav() {
  const [burgerOpen, setBurgerOpen] = useState();

  const handleClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item is-size-4 has-text-primary is-family-secondary"
        >
          <img src={logo} alt="Rolling Live Studios" />
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${burgerOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={`${burgerOpen ? "true" : "false"}`}
          data-target="navbarBasicExample"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${burgerOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          {socialLinks.map((sm) => (
            <div key={sm.service} className="navbar-item">
              <a
                href={sm.url}
                className="is-flex"
                target="_blank"
                style={{ alignItems: "center" }}
                title={sm.service}
              >
                <span className="icon is-size-4">{sm.icon}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
