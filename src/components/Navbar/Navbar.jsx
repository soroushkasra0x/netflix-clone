import logo from "../../assets/logo.png";

import search_icon from "../../assets/search_icon.svg";

import "./Navbar.css"; // Assuming you have a CSS file for styling

import profile_img from "../../assets/profile_img.png";

import caret_icon from "../../assets/caret_icon.svg";

import { useEffect, useRef } from "react";
import bell_icon from "../../assets/bell_icon.svg";
const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classlist.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>MY List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="drop-down">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
