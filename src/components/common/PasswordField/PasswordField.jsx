import {
  FieldWrapper,
  Field,
  ErrorMessage,
} from "@/components/common/FormField/FormField.styled";
import * as SC from "./PasswordField.styled";

const eyeMap = {
  true: <SC.EyeOnIcon />,
  false: <SC.EyeOffIcon />,
};

export const PasswordField = ({
  placeholder,
  type,
  name,
  passwordShown,
  onTogglePasswordShown,
}) => {
  return (
    <FieldWrapper>
      <Field type={type} name={name} placeholder={placeholder} />
      <SC.EyeBtn type="button" onClick={onTogglePasswordShown}>
        {eyeMap[passwordShown]}
      </SC.EyeBtn>
      <ErrorMessage name={name} component="span" />
    </FieldWrapper>
  );
};
