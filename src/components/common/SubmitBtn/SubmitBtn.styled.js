import styled from "styled-components";

export const Button = styled.button`
  height: 60px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(p) => p.theme.colors.primary()};

  border: none;
  border-radius: ${(p) => p.theme.radii.btn};
  background-color: ${(p) => p.theme.colors.accent};

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
