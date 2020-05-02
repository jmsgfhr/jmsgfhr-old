import React from "react";

const Button = (props) => (
  <>
    <button className={props.classType}>{props.content}</button>
  </>
);

export default Button;