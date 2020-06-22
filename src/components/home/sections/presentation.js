import React from "react";
import Button from '../../button/button';

const Presentation = () => (
  <div className="presentation">
    <div className="presentation-content">
      <h1 className="presentation-title">Olá, eu sou Jonathan</h1>
      <p className="presentation-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tempor maximus.</p>
      < Button content="↓" classType="presentation-button" />
      <div className="presentation-blob-one"></div>
      <div className="presentation-blob-two"></div>
    </div>
  </div>
);

export default Presentation;