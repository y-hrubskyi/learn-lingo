import { useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import { loginSchema } from "@/constants/validation/loginSchema";

import { ModalBase } from "@/components/common/ModalBase/ModalBase";
import {
  BaseModalTitle,
  BaseModalDescription,
} from "@/components/common/ModalBase/ModalBase.styled";
import { FormBase } from "@/components/common/FormBase/FormBase";
import { FieldsWrapper } from "@/components/common/FormBase/FormBase.styled";
import { FormField } from "@/components/common/FormField/FormField";
import { PasswordField } from "@/components/common/PasswordField/PasswordField";
import { SubmitBtn } from "@/components/common/SubmitBtn/SubmitBtn";

const initialValues = {
  email: "",
  password: "",
};

export const LoginModal = ({ onClose }) => {
  const { logIn } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const handleSubmit = async (values) => {
    try {
      await logIn(values.email, values.password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalBase onClose={onClose} width="566px">
      <BaseModalTitle>Log In</BaseModalTitle>
      <BaseModalDescription>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </BaseModalDescription>
      <FormBase
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <FieldsWrapper>
          <FormField placeholder="Email" type="email" name="email" />
          <PasswordField
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            name="password"
            passwordShown={passwordShown}
            onTogglePasswordShown={togglePasswordShown}
          />
        </FieldsWrapper>
        <SubmitBtn>Log In</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
