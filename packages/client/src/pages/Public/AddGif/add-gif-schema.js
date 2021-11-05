import * as Yup from "yup";

const addGifSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "The title is too short")
    .max(30, "The title is too long")
    .required("The title is required"),
});

export default addGifSchema;
