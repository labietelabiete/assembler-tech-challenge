import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";
// import { FaSearch } from "react-icons/fa";

// import Button from "../Button";

// import { PUBLIC } from "../../constants/routes";

import "./Input.scss";

export default function Input({
  label = false,
  id = "input-01",
  type = "",
  classNames,
  isNegative = false,
  fullWidth = false,
  placeholder = "",
  inputFileText = "Choose your file",
  acceptFiles = "image/*",
  handleChange = () => {},
  handleBlur = () => {},
  handleInput = () => {},
  hasSubmitIcon,
  errorMessage,
  hasErrorMessage,
  hasForgotPassword,
  ...props
}) {
  const componentClasses = `${classNames} custom-input d-flex flex-column mb-3`;
  const errorClassNames =
    "col col-12 error-msg fnt-smallest mt-2 mb-0 ps-3 w-100";

  let labelClassNames = "fnt-label-bold p-0 mb-2 ";
  let inputClassNames = "fnt-input-light fx-rounded ps-3 ";

  if (isNegative) {
    labelClassNames += "negative-label";
    inputClassNames += "negative-input";
  } else {
    labelClassNames += "positive-label";
    inputClassNames += "positive-input";
  }

  if (fullWidth) {
    inputClassNames += " w-100";
  }

  return (
    <div
      className={
        hasSubmitIcon ? `${componentClasses} px-0 ` : `${componentClasses}`
      }
    >
      {label ? (
        <label className={labelClassNames} htmlFor={id}>
          {label}
        </label>
      ) : (
        <label className={labelClassNames} htmlFor={id}>
          &nbsp;
        </label>
      )}
      <div
        className={
          hasSubmitIcon
            ? "d-flex justify-content-between px-3"
            : "col col-12 p-0"
        }
      >
        <input
          type={type}
          className={
            hasSubmitIcon
              ? `${inputClassNames} flex-search flex-grow-1 px-0`
              : `${inputClassNames} form-input col-12`
          }
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          onInput={handleInput}
          {...props}
        />
      </div>
      <div className="row m-0">
        {hasErrorMessage && errorMessage ? (
          <p
            className={
              hasForgotPassword
                ? `${errorClassNames} col-md-6`
                : errorClassNames
            }
          >
            {errorMessage}
          </p>
        ) : (
          <p
            className={
              hasForgotPassword
                ? `${errorClassNames} col-md-6`
                : errorClassNames
            }
          >
            &nbsp;
          </p>
        )}
      </div>
    </div>
  );
}
