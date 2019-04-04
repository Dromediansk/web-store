import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <React.Fragment>
      <div className="bg-contact2">
        <div className="container-contact2">
          <div className="wrap-contact2">
            <form className="contact2-form validate-form">
              <span className="contact2-form-title">Contact Us</span>

              <div
                className="wrap-input2 validate-input"
                data-validate="Name is required"
              >
                <input className="input2" type="text" name="name" />
                <span className="focus-input2" data-placeholder="NAME" />
              </div>

              <div
                className="wrap-input2 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input className="input2" type="text" name="email" />
                <span className="focus-input2" data-placeholder="EMAIL" />
              </div>

              <div
                className="wrap-input2 validate-input"
                data-validate="Message is required"
              >
                <textarea className="input2" name="message" />
                <span className="focus-input2" data-placeholder="MESSAGE" />
              </div>

              <div className="container-contact2-form-btn">
                <div className="wrap-contact2-form-btn">
                  <div className="contact2-form-bgbtn" />
                  <button className="contact2-form-btn">
                    Send Your Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
