import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../../components/Layout";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import signInSchema from "./sign-in-schema";
// import { PUBLIC } from "../../../constants/routes";

import { logIn, logOut } from "../../../redux/user/actions";

import { signIn } from "../../../api/users-api";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (signInState) => {
      setLoading(true);
      try {
        // const formData = new FormData();
        // formData.append("userName", signUpState.userName);
        // formData.append("email", signUpState.email);
        // formData.append("password", signUpState.password);
        // await createUser(formData);

        var data = {
          email: signInState.email,
          password: signInState.password,
        };
        const signInData = await signIn(data);
        const userData = signInData.data.data;
        const userRedux = {
          isLogged: true,
          userName: userData.userName,
          email: userData.email,
        };
        dispatch(logIn(userRedux));

        toast("Signed in!", { type: "success" });
        // history.push(PUBLIC.HOME);
      } catch (error) {
        toast(error.message, { type: "error" });
      }
      setLoading(false);
    },
  });

  return (
    <Layout>
      <div className="container bgr-primary clr-white">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Sign In</h1>
            <form onSubmit={formik.handleSubmit} className="row">
              <Input
                classNames="col-12"
                label="Email"
                id="email"
                type="email"
                placeholder="name@example.com"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.email}
                errorMessage={formik.errors.email}
                hasErrorMessage={formik.touched.email}
                disabled={loading.isLoading || loading.isError}
              />
              <Input
                classNames="col-12"
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.password}
                errorMessage={formik.errors.password}
                hasErrorMessage={formik.touched.password}
                disabled={loading.isLoading || loading.isError}
              />
              <div className="p-2 text-end">
                <Button classNames="p-2" secondaryBtn type="submit">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
