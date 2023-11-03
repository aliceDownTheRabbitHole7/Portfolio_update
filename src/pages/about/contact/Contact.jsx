import React from "react";
import ContactData from '../../../data/ContactData'
import './Contact.css'

function Contact() {
  const contactMap = ContactData.map((data, i) => {
    return (
      <div className={data.class} key={i}>
        {data.icon}
        <span className="contact-text">{data.text}</span>
      </div>
    );
  });

  return (
    <div className="contact-container">
        {contactMap}
    </div>
  )
}

export default Contact;
