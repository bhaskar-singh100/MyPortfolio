import React from "react";
import "./Contact.css";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "286fd6f1-b710-464a-b923-b94d66ea784c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div className="contacts">
      <h1 className="heading">Get in touch</h1>
      <div className="contact">
        <div className="lets-talk">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <ul>
            <li>
              <IoMail className="icon" />
              bhaskarsingh2179@gmail.com
            </li>
            <li>
              <BiSolidPhoneCall className="icon" />
              9990685140
            </li>
            <li>
              <FaLocationDot className="icon" />
              Ghaziabad, U.P., India
            </li>
            <div className="social-media">
              <BsInstagram className="icon"><a href="https://google.com"></a></BsInstagram>
              <FaLinkedinIn className="icon" />
              <FaGithub className="icon" />
            </div>
          </ul>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label>Write your message here</label>
            <textarea
              rows={15}
              name="message"
              id=""
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="btn contact-btn">
              Submit now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Contact;
