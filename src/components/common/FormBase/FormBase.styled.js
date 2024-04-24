import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(8)};

  @media screen and (min-width: 1440px) {
    gap: ${(p) => p.theme.spacing(10)};
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(3)};

  @media screen and (min-width: 1440px) {
    gap: ${(p) => p.theme.spacing(4.5)};
  }
`;
