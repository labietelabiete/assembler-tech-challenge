import React from "react";

import "./Button.scss";

export default function Button({
  primaryBtn = true,
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
  let btnclassNames = `${classNames} custom-btn fx-rounded d-flex align-items-center justify-content-center clr-white`;

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
