import { useState } from "react";

import { useAuth } from "@/hooks/useAuth";
import { registerSchema } from "@/constants/validation/registerSchema";

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
  name: "",
  email: "",
  password: "",
};

export const RegisterModal = ({ onClose }) => {
  const { signUp, updateUser } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const handleSubmit = async (values) => {
    try {
      await signUp(values.email, values.password);
      await updateUser({ displayName: values.name });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalBase onClose={onClose} width="566px">
      <BaseModalTitle>Registration</BaseModalTitle>
      <BaseModalDescription>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </BaseModalDescription>
      <FormBase
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <FieldsWrapper>
          <FormField placeholder="Name" type="text" name="name" />
          <FormField placeholder="Email" type="email" name="email" />
          <PasswordField
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            name="password"
            passwordShown={passwordShown}
            onTogglePasswordShown={togglePasswordShown}
          />
        </FieldsWrapper>
        <SubmitBtn>Sign Up</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
