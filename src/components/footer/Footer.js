import React from "react";
import { BiHelpCircle, BiChat, BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt, FaFax, FaGlobe } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer
      id="footer"
      className="text-white flex flex-col justify-center items-center"
    >
      <div className="footer grid md:grid-cols-4 py-10 px-5  gap-6">
        <div className="footer-box  col-span-1">
          <h4 className="footer-title">Useful Links</h4>
          <div className="footer-links">
            <a href="#home" className="useful-link">
              About
            </a>
            <a href="#home" className="useful-link">
              Learn
            </a>
            <a href="#home" className="useful-link">
              Hosting
            </a>
            <a href="#home" className="useful-link">
              Messenger
            </a>
          </div>
        </div>
        <div className="footer-box col-span-1">
          <h4 className="footer-title">Support</h4>
          <div className="footer-links">
            <a href="#home">
              <span className="link">
                <span className="footer-icon">
                  <BiHelpCircle />
                </span>
                <p>Help</p>
              </span>
            </a>
            <a href="#home">
              <span className="link">
                <span className="footer-icon">
                  <BiChat />
                </span>
                <p>Chat</p>
              </span>
            </a>
            <a href="#home">
              <span className="link">
                <span className="footer-icon">
                  <BiPhoneCall />
                </span>
                <p>Call</p>
              </span>
            </a>
            <a href="#home">
              <span className="link">
                <span className="footer-icon">
                  <HiMail />
                </span>
                <p>Email</p>
              </span>
            </a>
          </div>
        </div>

        <div className="footer-box  col-span-2">
          <h4 className="footer-title">Contact Us</h4>
          <div className="footer-links">
            <span className="link">
              <span className="footer-icon">
                <GoLocation />
              </span>
              <p>Nakuru, Kenya</p>
            </span>

            <span className="link">
              <span className="footer-icon">
                <FaPhoneAlt />
              </span>
              <p>+254 717550756</p>
            </span>

            <span className="link">
              <span className="footer-icon">
                <FaFax />
              </span>
              <p>+254 717550775</p>
            </span>

            <span className="link">
              <span className="footer-icon">
                <BiEnvelope />
              </span>
              <p>sammy.k.mutua@gmail.com</p>
            </span>

            <span className="link">
              <span className="footer-icon">
                <FaGlobe />
              </span>
              <p>www.laratrust.co.ke</p>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-box py-3">
        <div className="flex items-center flex-col">
          <span className="text-xl text-white">
            LaraSocial<span style={{ color: "orangered" }}>x</span>
          </span>
          <p>&copy; 2021. LaraSocialx.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
