import React from "react";

import "./Input.scss";

export default function Input({
  label = false,
  id = "input-01",
  type = "",
  classNames,
  isNegative = false,
  fullWidth = false,
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  handleInput = () => {},
  errorMessage,
  hasErrorMessage,
  hasForgotPassword,
  ...props
}) {
  const errorClassNames = "col col-12 clr-error mt-2 mb-0 w-100";

  let labelClassNames = "fnt-label-bold p-0 mb-2 ";

  if (isNegative) {
    labelClassNames += "negative-label";
  } else {
    labelClassNames += "positive-label";
  }

  return (
    <div>
      {label ? (
        <label className={labelClassNames} htmlFor={id}>
          {label}
        </label>
      ) : (
        <label className={labelClassNames} htmlFor={id}>
          &nbsp;
        </label>
      )}
      <div>
        <input
          type={type}
          className="p-1 form-input col-12"
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
