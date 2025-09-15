import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#222",
    color: "white",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "700",
  };

  const logoSpanStyle = {
    color: "#4fc3f7",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#4fc3f7",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#fff",
  };

  return (
    <header style={navbarStyle}>
      <div style={logoStyle}>
        Task<span style={logoSpanStyle}>Manager</span>
      </div>
      <ul style={ulStyle}>
        <li>
          <Link to="/home2" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/features" style={linkStyle}>Features</Link>
        </li>
        <li>
          <Link to="/pricing" style={linkStyle}>Pricing</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
        <li>
          <Link to="/login" style={linkStyle}>Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
