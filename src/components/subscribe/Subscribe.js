import React, { useEffect } from "react";
import "./Subscribe.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Subscribe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe" className="text-center text-white py-14">
      <div className="holder subscribe">
        <h2 className="subscribe-title text-3xl py-4">Subscribe now!</h2>
        <form
          className="form-control flex justify-center gap-2"
          data-aos="fade-up"
        >
          <input
            className="placeholder-white px-3 py-1 w-full sm:w-1/2 rounded-md outline-none text-white bg-transparent border"
            type="text"
            placeholder="Enter your email..."
          />
          <button className="px-2 py-1 rounded-md bg-indigo-500 text-white hover:text-white transition-all duration-300 hover:bg-indigo-700">
            Subscribe
          </button>
        </form>

        <div
          className="social-icons flex justify-center items-center gap-12"
          data-aos="zoom-in"
        >
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
