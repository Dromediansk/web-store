import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer-distributed">
      <div className="footer-left">
        <h3>
          Phone<span>Arena</span>
        </h3>

        <p className="footer-links">
          <a href="/">Home</a>·<a href="/store">Store</a>·
          <a href="#about">About us</a>·<a href="#contact">Contact</a>
        </p>

        <p className="footer-company-name">Company Name &copy; 2019</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <span>21 Example Street</span> Town, Country
          </p>
        </div>

        <div>
          <i className="fa fa-phone" />
          <p>+### &&& %%% $$$</p>
        </div>

        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
      </div>
    </footer>
  );
}
