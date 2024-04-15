import { useEffect } from "react";

import { Themes } from "@/styles/theme";

import * as SC from "./ThemeModal.styled";

export const ThemeModal = ({ onClose, onThemeSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <SC.Backdrop onClick={handleOverlayClick}>
      <SC.Modal>
        {Object.keys(Themes).map((theme) => (
          <SC.ThemeColor
            key={theme}
            type="button"
            onClick={() => onThemeSelect(Themes[theme].name)}
            data-theme-color={Themes[theme].accent}
          />
        ))}
      </SC.Modal>
    </SC.Backdrop>
  );
};
