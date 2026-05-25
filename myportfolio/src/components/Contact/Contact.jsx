import React, {useState} from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import LKD_icon from "../../assets/linkedin.png"
import GMAIL_icon from "../../assets/mail-icon.png"
import Phone_icon from "../../assets/phone-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23d56cc0-edd7-4003-b99f-43369e21a0af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send me a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out throug contact form or find my contact information below. 
            Your feedback, questions and suggestions are important to me as i enjoy creating content of this format</p>
            <ul>
                <li><img src={GMAIL_icon} alt=""/>luc.casalat@gmail.com</li>
                <li><img src={Phone_icon} alt=""/>+33 7 69 33 18 43</li>
                <li><img src={LKD_icon} alt="" />www.linkedin.com/in/luc-casassus-latrille-20962433a</li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type='submit' className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
