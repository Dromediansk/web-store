import React from "react";
import "./Offer.css";

export default function Offer() {
  return (
    <div className="offer-section">
      <div className="offer-container">
        <div className="option">
          <div className="option-text">
            <i className="fas fa-user-tie" />
            <p>Proffessional approach</p>
          </div>
        </div>
        <div className="option">
          <a href="/store">
            <div className="option-text">
              <i className="fas fa-shopping-cart" />
              <p>
                Choose
                <br />& <br />
                buy
              </p>
            </div>
          </a>
        </div>
        <div className="option">
          <div className="option-text">
            <i className="fas fa-tools" />
            <p>
              Repair <br />& <br />
              configure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
