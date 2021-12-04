import React, { useState } from "react";
import "./Navbar.css";
import { SiAnaconda } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { useGlobalContext } from "../../store/context";
import NavBarModal from "./NavbarModal";
import { navbarLinks } from "../../constants/navbarLinks";
import Button from "../UI/button/Button";

function Navbar() {
  const { showMenu, setShowMenu } = useGlobalContext();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div class="w-full  h-16 fixed top-0  z-40 navbar">
      <div className="h-full w-full flex justify-center">
        <div class="w-full flex justify-between items-center mx-8 xl:mx-44">
          {/* logo */}
          <div className="logo">
            <SiAnaconda className="text-white text-2xl" />
            <p className="logo-text">
              LaraSocial<span>x</span>
            </p>
          </div>

          {/* navigation links */}
          <menu className="">
            <ul className="nav__links rou">
              {navbarLinks.map((link) => {
                const { id, label, url } = link;
                return (
                  <li key={id}>
                    <a href={url}>{label}</a>
                  </li>
                );
              })}

              <Button
                btnLabel="Learn More"
                css="rounded-md hover:border-yellow-500 border"
              />
            </ul>
          </menu>

          <div className="menu__icons" onClick={toggleMenu}>
            {showMenu ? <IoMdCloseCircle /> : <HiMenuAlt1 />}
          </div>

          <NavBarModal />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
