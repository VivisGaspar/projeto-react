import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import logoVojo from "../../assets/images/logo-vojo.svg";
import "./header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <Link to="/">
            <img src={logoVojo} alt="Logo VOJO" className="header-logo" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
