import React, { useRef } from "react";
import "./Email.css";
import emailjs from '@emailjs/browser'
function Email() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_joehb66', 'template_tuat03o', form.current, '0WuE-D7t7icDViutJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Email">
      <div className="left-e">
        <hr />
        <div>
          <span className="stoke-text">READY TO </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stoke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-e">
        <form ref={form} className="Email-container" onSubmit={sendEmail}>
          <input
            type="Emali"
            name="user_email"
            placeholder="Enter your own E-mail ID"
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Email;
