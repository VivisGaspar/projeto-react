import React, { PureComponent } from "react";
import logoFooter from "../../assets/images/logo-footer.svg";
import "./footer.css";

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="footer-wrapper">
          <img src={logoFooter} alt="Logo VOJO" className="footer-logo" />
          <span className="footer-copy">&copy;&nbsp;2018</span>
          <div className="footer-navbar">
            <a href="/" className="footer-link">
              Termos de uso
            </a>
            <a href="/" className="footer-link">
              Política de privacidade
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
