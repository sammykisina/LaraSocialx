import React, { useEffect } from "react";
import "./Header.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import Button from "../UI/button/Button";
import { CgMouse } from "react-icons/cg";

import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="pt-11 md:pt-0 pb-3 dark-bg " id="header">
      <div className="holder flex flex-col items-center justify-center md: gap-4 md:flex-row h-screen ">
        <div
          className="header__left flex justify-center items-center md:justify-start flex-col "
          data-aos="fade-right"
        >
          <h1 className="text-white relative pb-2">
            <span className="block text-2xl font-extrabold">
              THE WORLD'S LEADING
            </span>
            <span className="block text-sm font-thin text-center md:text-left">
              CROSS-PLATFORM SECURE
            </span>
            <span className="block font-thin text-center text-xs md:text-left">
              MESSAGING SYSTEM
            </span>
          </h1>
          <div className="w-3/4 bg-white h-1"></div>

          <p className="my-3 w-3/4 u-text-small text-left text-indigo-400">
            <span className="text-xl text-white">
              LaraSocial<span style={{ color: "orangered" }}>x</span>
            </span>{" "}
            is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            fugiat vel amet, sapiente ipsa necessitatibus
          </p>

          <div className="header flex gap-2">
            <Button
              btnLabel="Get Started"
              href="#"
              css="rounded-full hover:text-yellow-600 border text-white"
            />
            <Button
              btnLabel="How It Works"
              href="#faq"
              css="rounded-full bg-indigo-900 hover:bg-indigo-600 text-gray-900 hover:text-gray-300"
            />
          </div>
        </div>
        <div className="header__right flex justify-center" data-aos="fade-left">
          <img className="w-11/12" src={phoneHeader} alt="phone" />
        </div>
      </div>

      <div className="floating-icon mt-7 md:-mt-32 flex justify-center">
        <span className="bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center  cursor-pointer">
          <a href="#features" className="">
            <CgMouse className="text-white text-2xl mouse" />
          </a>
        </span>
      </div>
    </section>
  );
}
export default Header;
