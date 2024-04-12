import { Formik } from "formik";

import * as SC from "./FormBase.styled";

export const FormBase = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <SC.Form>{children}</SC.Form>
    </Formik>
  );
};
