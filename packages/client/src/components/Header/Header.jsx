import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

import searchSchema from "./search-schema";
import { PUBLIC } from "../../constants/routes";

import { logOut } from "../../redux/user/actions";

import "./Header.scss";

import logo from "./../../utils/logo.png";

export default function Header() {
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      searchBar: "",
    },
    validationSchema: searchSchema,
    onSubmit: (formikState) => {
      if (formikState.searchBar !== "")
        history.push(`${PUBLIC.SEARCH}?q=${formikState.searchBar}`);
    },
  });

  const handleSignOut = () => {
    dispatch(logOut());
    history.push(PUBLIC.HOME);
  };

  return (
    <header className="px-5 py-5 h-60 align-items-center d-flex justify-content-between bgr-primary">
      <div className="left-wrapper-header d-flex align-items-center">
        <Link
          to={{
            pathname: PUBLIC.HOME,
          }}
        >
          <img className="logo me-5" src={logo} alt="logo" />
        </Link>
        <form onSubmit={formik.handleSubmit} className="d-flex align-items-center ms-5">
          <Input
            classNames="col-12"
            id="searchBar"
            type="text"
            placeholder="Search"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.searchBar}
            errorMessage={formik.errors.searchBar}
            hasErrorMessage={formik.touched.searchBar}
          />
          <div className="p-1">
            <Button classNames="p-1" quaternaryBtn type="submit">
              Search
            </Button>
          </div>
        </form>
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
              <Button classNames="p-2" secondaryBtn>
                Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
