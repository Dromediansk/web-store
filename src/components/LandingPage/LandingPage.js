import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Hello from Phone Arena</h1>
            <h3>Offering the best quality products from proven suppliers.</h3>
          </div>
        </header>
        <section>
        <div className="container-fluid text-center options">
          <div className="row">
            <div className="col-sm e-shop-text">
              <div className="container">
                <h3>Pick your product</h3>
                <p>Browse our shop, choose a product and let deliver it to your home in few minutes</p>
              </div>
            </div>
            <div className="col-sm e-shop-container">
              <div className="e-shop"></div>
                <div className="cart-img container">
                  <Link to="/store">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
            </div>
          </div>
        </div>
        </section>
      </React.Fragment>
    )
  }
}