import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../assets/assets";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Images.Images.logo} alt="Vanquish Logo" />
        <Link to="/"></Link>
      </div>
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <Link to="/">Main Page</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
