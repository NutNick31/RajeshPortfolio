import React from "react";
import "./contact.css";
import { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_osoj46a",
        "template_gzypras",
        form.current,
        "wMsjHp4wtgyEkhFsO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"></AiOutlineMail>
            <h4>Email</h4>
            <h5>rajesh01ksingh@gmail.com</h5>
            <a href="mailto:rajesh01ksingh@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon"></BsInstagram>
            <h4></h4>
            <h5>Instagram</h5>
            <a href="https://www.instagram.com/geekyraj31/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>+91-7289952064</h5>
            <a
              href="https://api.whatsapp.com/secd?phone=9560540694"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea name="message" rows="7" placeholder="Your Message" required>
            {" "}
          </textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message{" "}
          </button>
        </form>
      </div>
    </section>
  );
};
