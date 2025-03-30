import * as Yup from "yup";

export const settingValidationSchema = Yup.object({
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters"),
  dob: Yup.date().required("Required"),
  presentAddress: Yup.string().required("Required"),
  permanentAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postalCode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});
