import React, { useState } from "react";
import NavbarBtn from "./navbars/NavbarBtn";
import NavbarLinks from "./navbars/NavbarLinks";
import NavbarLogo from "./navbars/NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="max-w-{1200px} mx-auto flex justify-between items-center px-4 w-full fixed left-[50%] -translate-x-[50%] z-20  gap-4 mt-2">
      <div className="flex justify-between w-full max-w-{1200px} mx-auto bg-brown items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
        <NavbarLinks />
        </div>
        
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-brown item-center justify-center rounded-full border-[0.5px] border-orange">
      <button className="text-2xl p-3 border border-orange rounded-full text-white " onClick={toggleMenu}>
      <GiHamburgerMenu />
      </button>
      </div>
    </nav>
  );
};

export default Header;
