import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  email: Yup.string().required("The email is required"),
  password: Yup.string().required("The password is required"),
});

export default signUpSchema;
