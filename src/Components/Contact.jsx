import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="Contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/adisummit/"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/sumit.halder.7583"
            target="_blank"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-halder-739a651b6/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>

          <a
            href="https://github.com/sumit-halder4"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=haldersumit30@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
          <a href="tel:+916290023177" className="items">
            <FaPhoneAlt className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
