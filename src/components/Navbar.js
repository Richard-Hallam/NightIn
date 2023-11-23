import React from "react";
import '../styles/navbar.css'; // Include your Navbar CSS file
import TempSearch from "./TempSearch";

function Navbar() {
 
  return (
    <div className="navbar">
      <div className="brand-match">
        <div className="navtitle">NightIn.</div>
      </div>

      
      <div className="navbuttons">
        <button>Signup</button>
        <div className="login-button">
          <button>Login</button>
        </div>
        <div className="temp-search">
          <TempSearch />
        </div>
      </div>


    </div>
  );
}

export default Navbar;
