import React from "react";
import "./NavbarModal.css";
import { navbarLinks } from "../../constants/navbarLinks";
import { useGlobalContext } from "../../store/context";
import Button from "../UI/button/Button";

function NavbarModal() {
  const { showMenu, setShowMenu } = useGlobalContext();
  return (
    <div
      className="modal"
      id={showMenu ? "show" : "hide"}
      onClick={() => setShowMenu(false)}
    >
      <ul>
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center px-16 pb-2">
        <Button
          btnLabel="Learn More"
          css="rounded-full w-full text-center hover:bg-indigo-400 hover:border-indigo-400 border border-white text-white"
        />
      </div>
    </div>
  );
}

export default NavbarModal;
