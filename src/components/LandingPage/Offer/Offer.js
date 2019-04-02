import React from "react";
import './Offer.css';

export default function Offer() {
  return (
    <div className="offer-section">
        <div className="offer-container">
        <div className="option">
            <div className="option-text" >
                <i class="fas fa-user-tie"></i>
                <p>Proffessional approach</p>
            </div>
        </div>
        <div className="option">
            <div className="option-text" >
                <i class="fas fa-shopping-cart"></i>
                <p>Choose<br />& <br />buy</p>
            </div>
        </div>
        <div className="option">
            <div className="option-text" >
                <i class="fas fa-tools"></i>
                <p>Repair <br />& <br />configure</p>
            </div>
        </div>
        </div>
    </div>
  )
}