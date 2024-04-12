import styled from "styled-components";
import { Field as FormikField, ErrorMessage as FormikError } from "formik";

export const FieldWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(1)};
`;

export const Field = styled(FormikField)`
  padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(4.5)};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${(p) => p.theme.colors.primary()};

  background: transparent;
  border: 1px solid ${(p) => p.theme.colors.primary(0.1)};
  border-radius: ${(p) => p.theme.radii.btn};

  &::placeholder {
    color: currentColor;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
`;
