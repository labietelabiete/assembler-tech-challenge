import React, { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../../components/Layout";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import signUpSchema from "./sign-up-schema";
import { PUBLIC } from "../../../constants/routes";

import { signUp } from "../../../api/users-api";

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (signUpState) => {
      setLoading(true);
      try {
        var data = {
          userName: signUpState.userName,
          email: signUpState.email,
          password: signUpState.password,
        };
        await signUp(data);
        toast("Signed up!", { type: "success" });
        setTimeout(() => {
          history.push(PUBLIC.SIGN_IN);
        }, 3000);
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
            <h1 className="my-4">Sign Up</h1>
            <form onSubmit={formik.handleSubmit} className="row">
              <Input
                classNames="col-12"
                label="Username"
                id="userName"
                type="text"
                placeholder="Username"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.userName}
                errorMessage={formik.errors.userName}
                hasErrorMessage={formik.touched.userName}
                disabled={loading}
              />
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
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
