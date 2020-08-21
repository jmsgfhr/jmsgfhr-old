import React from "react";
import Foto from "../../../images/Jonathan.png";
import Regua from "../../../images/regua.svg";
import Front from "../../../images/front.svg";

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-blob">
        <svg className="blob-about" viewBox="-70 -90 150 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lgrad" x1="50%" y1="100%" x2="50%" y2="0%" >
              <stop offset="0%" stopColor="rgb(237,163,255)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(163,255,237)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#lgrad)"/>
        </svg>
      </div>
      <h2 className="about-title">Quem Sou</h2>
      <p className="about-paragraph">Sou estudante de Ciência da Computação na Universidade Federal Fluminense e desenvolvedor Front-End/analista na INJunior. Estou sempre a procura de novos desafios e aprendizados.</p>
      <div className="round-photo"><img src="https://i.imgur.com/bpX8xOz.jpg" alt="Este sou eu"></img></div>
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