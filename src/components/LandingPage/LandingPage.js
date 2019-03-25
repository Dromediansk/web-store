import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import ContactForm from "./ContactForm/ContactForm";

export default function LandingPage() {
  return (
    <React.Fragment>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hello from Phone Arena</h1>
          <h3>Offering only the best quality products</h3>
        </div>
      </header>
      <section className="zone main-section">
        <div className="container-fluid text-center options">
          <div className="row">
            <div className="col-sm e-shop-text">
              <div className="container">
                <h3>Pick your product</h3>
                <p>
                  Browse our shop, choose a product and let deliver it to your
                  home in few minutes
                </p>
              </div>
            </div>
            <div className="col-sm e-shop-container">
              <div className="e-shop" />
              <div className="cart-img container">
                <Link to="/store">
                  <i className="fas fa-shopping-cart" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <footer className="zone yellow">Footer</footer>
    </React.Fragment>
  );
}
