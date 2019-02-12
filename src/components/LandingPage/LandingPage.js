import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hello from Phone Arena</h1>
          <h3>Offering the best quality products from proven suppliers.</h3>
        </div>
      </div>
    )
  }
}
