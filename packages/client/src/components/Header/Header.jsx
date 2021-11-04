import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <header className="h-85 d-flex justify-content-between">
      <div className="left-wrapper-header d-flex">
        <div className="logo">Logo</div>
        <div className="search-bar">Search</div>
      </div>
      <div className="right-wrapper-header d-flex">
        <div>Upload</div>
        <div>User</div>
        <div>SignIn/SignOut</div>
      </div>
    </header>
  );
}
