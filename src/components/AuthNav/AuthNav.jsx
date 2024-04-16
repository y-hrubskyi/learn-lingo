import { useEffect, useState } from "react";

import { RegisterModal } from "@/components/RegisterModal/RegisterModal";
import { LoginModal } from "@/components/LoginModal/LoginModal";
import * as SC from "./AuthNav.styled";

export const AuthNav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      isLoginOpen || isRegisterOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoginOpen, isRegisterOpen]);

  const toggleLoginModal = () => {
    setIsLoginOpen((prevState) => !prevState);
  };

  const toggleRegisterModal = () => {
    setIsRegisterOpen((prevState) => !prevState);
  };

  return (
    <SC.AuthNavWrapper>
      <SC.LoginBtn type="button" onClick={toggleLoginModal}>
        <SC.LoginIcon />
        Log in
      </SC.LoginBtn>
      <SC.RegisterBtn type="button" onClick={toggleRegisterModal}>
        Registration
      </SC.RegisterBtn>
      {isLoginOpen && <LoginModal onClose={toggleLoginModal} />}
      {isRegisterOpen && <RegisterModal onClose={toggleRegisterModal} />}
    </SC.AuthNavWrapper>
  );
};
