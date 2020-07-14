import React from "react";
import Foto from "../../../images/Jonathan.png";

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <h2 className="about-title">Quem Sou</h2>
      <p className="about-paragraph">Sou estudante de Ciência da Computação na Universidade Federal Fluminense e desenvolvedor Front-End/analista na INJunior. Estou sempre a procura de novos desafios e aprendizados.</p>
      <div className="round-photo"><img src={Foto} alt="Este sou eu"></img></div>
    </div>
  </section>
);

export default About;