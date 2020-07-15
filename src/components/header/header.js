import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="left-div-header">
        < NavLink to="/" className="logo">
          <div className="logo-rect">J</div>
        </ NavLink>
      </div>
      <div className="right-div-header">
        < NavLink to="/portfolio" className="s-button" >Portfólio</ NavLink>
        < NavLink to="/about" className="s-button" >Sobre</ NavLink>
        < NavLink to="/contact" className="s-button" >Contato</ NavLink>
      </div>
    </div>
  </header >
);

export default Header;