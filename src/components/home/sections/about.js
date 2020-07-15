import React from "react";
import Foto from "../../../images/Jonathan.png";
import Regua from "../../../images/regua.svg";
import Front from "../../../images/front.svg";

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M26.9,-51.7C34.7,-42.1,40.7,-34.5,49.2,-26.2C57.6,-18,68.6,-9,74,3.1C79.5,15.3,79.4,30.6,73.5,43.3C67.6,56,55.8,66.1,42.6,65.5C29.4,64.9,14.7,53.4,5.2,44.5C-4.3,35.5,-8.7,29.1,-18.7,27.8C-28.7,26.6,-44.4,30.6,-48.4,26.9C-52.5,23.1,-44.9,11.6,-40.1,2.8C-35.3,-6,-33.2,-12,-31.2,-19.3C-29.2,-26.5,-27.2,-35,-22,-46.2C-16.8,-57.3,-8.4,-71,0.6,-72C9.5,-73,19.1,-61.3,26.9,-51.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <h2 className="about-title">Quem Sou</h2>
      <p className="about-paragraph">Sou estudante de Ciência da Computação na Universidade Federal Fluminense e desenvolvedor Front-End/analista na INJunior. Estou sempre a procura de novos desafios e aprendizados.</p>
      <div className="round-photo"><img src={Foto} alt="Este sou eu"></img></div>
      <div className="card-content">
        <div className="card-about">
          <div className="card-about-icon"><img src={Regua}></img></div>
          <h3 className="card-about-title">UI Designer</h3>
          <p className="card-about-text">Eu gosto de criar designs simples, fluidos e de fácil utilização. Sou curioso e aprecio procurar e criar sites com novas tendências de design.</p>
          <h4 className="card-about-subtitle">Designs que faço:</h4>
          <p className="card-about-text">UI, Web, Mobile, Apps</p>
          <h4 className="card-about-subtitle">Ferramentas que uso:</h4>
          <ul className="card-about-text">
            <li>Figma</li>
            <li>MockFlow</li>
            <li>Krita</li>
            <li>Papel e Caneta</li>
          </ul>
        </div>
        <div className="card-about">
          <div className="card-about-icon"><img src={Front}></img></div>
          <h3 className="card-about-title">Desenvolvedor Front</h3>
          <p className="card-about-text">Eu amo criar projetos do zero e ver designs criando vida na mão de usuários.</p>
          <h4 className="card-about-subtitle">Linguagens que uso:</h4>
          <p className="card-about-text">HTML, CSS, Sass, JS, Ruby on Rails</p>
          <h4 className="card-about-subtitle">Ferramentas que uso:</h4>
          <ul className="card-about-text">
            <li>VS Code</li>
            <li>GitHub</li>
            <li>Gitlab</li>
            <li>React.js</li>
            <li>WordPress</li>
            <li>Terminal</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;