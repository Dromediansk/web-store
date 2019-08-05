import React from "react";
import "./Offer.css";

const profSvg = process.env.PUBLIC_URL + "/img/svg/professional.svg";
const repairSvg = process.env.PUBLIC_URL + "/img/svg/repair.svg";
const buySvg = process.env.PUBLIC_URL + "/img/svg/buy.svg";

export default function Offer() {
  return (
    <div className="offer-section">
      <div className="offer-container">
        <div className="option">
          <div className="option-text">
            <img src={profSvg} alt="professional" />
            <p>Proffessional approach</p>
          </div>
        </div>
        <div className="option">
          <a href="/store">
            <div className="option-text">
              <img src={buySvg} alt="buy" />
              <p>Choose & buy</p>
            </div>
          </a>
        </div>
        <div className="option">
          <div className="option-text">
            <img src={repairSvg} alt="repair" />
            <p>Repair & configure</p>
          </div>
        </div>
      </div>
    </div>
  );
}
