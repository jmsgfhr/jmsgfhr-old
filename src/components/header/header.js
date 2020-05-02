import React from "react";
import Button from '../button/button';

const Header = () => (
  <header className="header">
    <div className="left-div-header">
      <a className="logo" href="#">
        <div className="logo-rect">J</div>
      </a>
    </div>
    <div className="right-div-header">
      < Button content="vazio" classType="s-button"/>
      < Button content="vazio" classType="s-button"/>
      < Button content="vazio" classType="s-button"/>
    </div>
  </header>
);

export default Header;