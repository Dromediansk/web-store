import React from "react";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src="./img/other/img1.jpg" alt="cellphone" />
        <img src="./img/other/img2.jpg" alt="cellphone" />
        <img src="./img/other/img3.jpg" alt="cellphone" />
        <img src="./img/other/img4.jpg" alt="cellphone" />
      </div>
      <div className="about-description">
        <h3>Who we are</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          esse temporibus dolor vero amet pariatur cupiditate eum porro saepe
          minima blanditiis velit nulla optio placeat ducimus, totam tempore
          incidunt voluptatem.
        </p>

        <h3>What is our goal</h3>
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          reprehenderit quo inventore fugiat repellat aliquid perspiciatis
          possimus nulla error sint exercitationem eveniet adipisci, iste et
          consectetur optio aut rem quidem.
        </p>
      </div>
    </div>
  );
}
