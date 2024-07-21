import { useState } from 'react';
import toast from 'react-hot-toast';

import { useAuth } from '@/hooks/useAuth';
import { registerSchema } from '@/constants/validation/registerSchema';

import { ModalBase } from '@/components/common/ModalBase/ModalBase';
import {
  BaseModalTitle,
  BaseModalDescription
} from '@/components/common/ModalBase/ModalBase.styled';
import { FormBase } from '@/components/common/FormBase/FormBase';
import { FieldsWrapper } from '@/components/common/FormBase/FormBase.styled';
import { FormField } from '@/components/common/FormField/FormField';
import { PasswordField } from '@/components/common/PasswordField/PasswordField';
import { SubmitBtn } from '@/components/common/SubmitBtn/SubmitBtn';
import { ToastMessage } from '@/components/common/ToastMessage/ToastMessage.styled';

const initialValues = {
  name: '',
  email: '',
  password: ''
};

export const RegisterModal = ({ isOpen, onClose, onCloseMobileMenu }) => {
  const { signUp, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown(prevState => !prevState);
  };

  const handleSubmit = async values => {
    try {
      setIsLoading(true);

      const registrationPromise = (async () => {
        await signUp(values.email, values.password);
        return updateUser({ displayName: values.name });
      })();

      await toast.promise(registrationPromise, {
        loading: <ToastMessage>Registering...</ToastMessage>,
        success: <ToastMessage>Registration successful!</ToastMessage>,
        error: <ToastMessage>Registration failed. Try again.</ToastMessage>
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
            type={passwordShown ? 'text' : 'password'}
            name="password"
            passwordShown={passwordShown}
            onTogglePasswordShown={togglePasswordShown}
          />
        </FieldsWrapper>
        <SubmitBtn isLoading={isLoading}>Sign Up</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
