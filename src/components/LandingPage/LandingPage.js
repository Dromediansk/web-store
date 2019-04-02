import React from "react";
import "./LandingPage.css";

import Offer from './Offer/Offer';
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";

export default function LandingPage() {
  return (
    <React.Fragment>
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hello from Phone Arena</h1>
          <h3>Offering only the best quality products</h3>
        </div>
      </header>
      <Offer />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}
