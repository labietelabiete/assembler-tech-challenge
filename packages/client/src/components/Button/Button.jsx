import React from "react";

import "./Button.scss";

export default function Button({
  primaryBtn = false,
  secondaryBtn = false,
  terciaryBtn = false,
  quaternaryBtn = false,
  fullWidth = false,
  submitButton = false,
  disabled = false,
  classNames = "",
  children,
  handleClick = () => {},
  ...props
}) {
  let btnclassNames = `${classNames} clr-white rounded `;

  if (primaryBtn) {
    btnclassNames += "bgr-primary ";
  } else if (secondaryBtn) {
    btnclassNames += "bgr-secondary ";
  } else if (terciaryBtn) {
    btnclassNames += "bgr-terciary ";
  } else if (quaternaryBtn) {
    btnclassNames += "bgr-quaternary ";
  }

  return (
    <button
      className={btnclassNames}
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
