import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

import { PUBLIC } from "../../constants/routes";

import { logOut } from "../../redux/user/actions";

import "./Header.scss";

export default function Header() {
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };

  return (
    <header className="px-5 py-5 h-60 align-items-center d-flex justify-content-between">
      <div className="left-wrapper-header d-flex">
        <div className="logo">Logo</div>
        <div className="search-bar">Search</div>
      </div>
      <div className="right-wrapper-header d-flex align-items-center">
        {userState.isLogged && (
          <div className="mx-4">
            <Link
              to={{
                pathname: PUBLIC.ADD_GIF,
              }}
            >
              <Button classNames="p-2" terciaryBtn>
                Upload your Gif
              </Button>
            </Link>
          </div>
        )}
        {userState.isLogged && (
          <div className="mx-4">
            <p className="user-name my-0">{userState.userName}</p>
          </div>
        )}
        {userState.isLogged ? (
          <div className="mx-4">
            <Button onClick={handleSignOut} classNames="p-2" secondaryBtn>
              Sign Out
            </Button>
          </div>
        ) : (
          <div>
            <Link
              to={{
                pathname: PUBLIC.SIGN_IN,
              }}
            >
              <Button classNames="px-2" secondaryBtn>
                Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
