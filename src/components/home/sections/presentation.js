import React from "react";
import Button from '../../button/button';

const Presentation = () => (
  <div className="presentation">
    <div className="presentation-circle-one"></div>
    <div className="presentation-circle-two"></div>
    <h1 className="presentation-title">Olá, eu sou Jonathan</h1>
    <p className="presentation-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tempor maximus. Sed porta eu dui ac ornare. Vivamus ac porttitor leo, non scelerisque odio. In vel ante nec lorem lobortis accumsan. Integer quis neque non ligula pulvinar tincidunt. In sed eros at neque posuere vestibulum. Nulla lacinia diam et imperdiet condimentum.</p>
    < Button content="↓" classType="presentation-button"/>
  </div>
);

export default Presentation;