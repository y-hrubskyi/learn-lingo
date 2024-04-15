import * as Yup from "yup";

import { reasons } from "@/constants/reasons";

const reasonsEnum = reasons.map((reason) => reason.value);

export const bookSchema = Yup.object().shape({
  fullname: Yup.string().min(2, "Too Short").required("Required"),
  email: Yup.string().email().required("Required"),
  phone: Yup.string().min(7, "Must be 7 or more").required("Required"),
  reason: Yup.mixed().oneOf(reasonsEnum).required("Required"),
});
