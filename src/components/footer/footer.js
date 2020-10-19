import React from "react";
import { NavLink } from "react-router-dom";
import Linkedin from "../../images/linkedin.svg";
import Gmail from "../../images/gmail.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsapp.svg";
import ReactLogo from "../../images/react.svg";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="contact-card">
        <h3 className="">Comece o seu projeto</h3>
        <p>Pensando em criar um projeto e não sabe com quem falar? Mande um email para conversarmos.</p>
        < NavLink to="/contact" className="s-button" ><p>Contato</p></ NavLink>
      </div>
      <div className="icons-container">
        <a href="https://www.linkedin.com/in/jonathanms30/" className="contact-footer-icons"><img src={Linkedin} alt="Linkedin Logo"></img></a>
        <a href="mailto:jonathanms30@gmail.com" className="contact-footer-icons"><img src={Gmail} alt="Gmail Logo"></img></a>
        <a href="https://www.facebook.com/jonathan.souza.5036459/" className="contact-footer-icons"><img src={Facebook} alt="Facebook Logo"></img></a>
        <a href="https://api.whatsapp.com/send?phone=5521969117585" className="contact-footer-icons"><img src={Whatsapp} alt="Whatsapp Logo"></img></a>
      </div>
      <p className="copyright">Site feito por mim © 2020</p>
      <a href="https://reactjs.org/" className="made">Feito com <img src={ReactLogo} alt="React.js Logo"></img></a>
    </div>
  </footer>
);

export default Footer;