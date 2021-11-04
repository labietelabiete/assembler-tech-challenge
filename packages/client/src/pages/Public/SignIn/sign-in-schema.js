import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "The username is too short!")
    .max(50, "The username is too long!")
    .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "Only letters accepted")
    .required("The username is required"),
  email: Yup.string()
    .email("This must be a valid email address")
    .required("The email is required"),
  password: Yup.string()
    .min(3, "The password is too short")
    .max(40, "The password is too long")
    .required("The password is required"),
});

export default signUpSchema;
