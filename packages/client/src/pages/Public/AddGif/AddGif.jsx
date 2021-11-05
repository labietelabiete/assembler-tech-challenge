import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Layout from "../../../components/Layout";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Select from "../../../components/Select";

import addGifSchema from "./add-gif-schema";
import { PUBLIC } from "../../../constants/routes";

import { uploadGif } from "../../../api/gifs-api";

export default function AddGif() {
  const history = useHistory();
  const [loadStatus, setLoadStatus] = useState(false);
  const userState = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "Games",
      url: "",
      urlFile: "",
      email: "",
    },
    validationSchema: addGifSchema,
    onSubmit: async (addGifState) => {
      setLoadStatus(true);
      try {
        console.log(addGifState.title);
        console.log(addGifState.category);
        console.log(addGifState.url);
        console.log(addGifState.urlFile);
        console.log(userState.email);
        const formData = new FormData();
        formData.append("title", addGifState.title);
        formData.append("category", addGifState.category);
        formData.append("url", addGifState.url);
        formData.append("urlFile", addGifState.urlFile);
        formData.append("email", userState.email);

        await uploadGif(formData);
        history.push(PUBLIC.HOME);
        toast("Gif upload successfully!", { type: "success" });
      } catch (error) {
        toast(error.message, { type: "error" });
      }
      setLoadStatus(false);
    },
  });

  const urlFileOnChange = async (event) => {
    formik.setFieldValue("urlFile", event.target.files[0]);
  };

  return (
    <Layout>
      <div className="container bgr-primary clr-white">
        <div className="row">
          <div className="col-12">
            <h1 className="my-4">Add your Gif</h1>
            <form onSubmit={formik.handleSubmit} className="row">
              <Input
                classNames="col-12"
                label="Title"
                id="title"
                type="text"
                placeholder="Title"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.title}
                errorMessage={formik.errors.title}
                hasErrorMessage={formik.touched.title}
              />
              <Select
                classNames="col-12"
                label="Category"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={loadStatus}
                options={["Games", "Meme", "Sport", "Films", "Technology"]}
              />
              <p>Paste the Gif URL</p>
              <Input
                classNames="col-12"
                label="Url"
                id="url"
                type="text"
                placeholder="Url"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                value={formik.values.url}
                errorMessage={formik.errors.url}
                hasErrorMessage={formik.touched.url}
              />
              <p>Or upload your own one.</p>
              <input
                type="file"
                className="col-12"
                id="urlFile"
                name="urlFile"
                onChange={urlFileOnChange}
                onBlur={formik.handleBlur}
                onInput={() => {}}
                accept="image/*"
              />
              <div className="p-2 text-end">
                <Button classNames="p-2" secondaryBtn type="submit">
                  Upload
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
