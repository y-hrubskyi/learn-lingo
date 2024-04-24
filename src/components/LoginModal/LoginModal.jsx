import { useState } from "react";
import toast from "react-hot-toast";

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
import { ToastMessage } from "@/components/common/ToastMessage/ToastMessage.styled";

const initialValues = {
  email: "",
  password: "",
};

export const LoginModal = ({ isOpen, onClose, onCloseMobileMenu }) => {
  const { logIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown((prevState) => !prevState);
  };

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);

      const loginPromise = logIn(values.email, values.password);

      await toast.promise(loginPromise, {
        loading: <ToastMessage>Logging in...</ToastMessage>,
        success: <ToastMessage>Login successful!</ToastMessage>,
        error: <ToastMessage>Login failed. Try again.</ToastMessage>,
      });
      onCloseMobileMenu();
    } catch (error) {
      // handled in toast.promise
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose} width="566px">
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
        <SubmitBtn isLoading={isLoading}>Log In</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
