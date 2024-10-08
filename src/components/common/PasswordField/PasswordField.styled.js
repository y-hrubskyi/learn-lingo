import styled from 'styled-components';

import EyeOnSVG from '~/assets/icons/eye-on.svg?react';
import EyeOffSVG from '~/assets/icons/eye-off.svg?react';

export const EyeBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;

  width: 20px;
  height: 20px;
  padding: 0;

  color: ${p => p.theme.colors.primary()};

  background-color: transparent;
  border: none;

  transition: ${p => p.theme.transition('color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 1440px) {
    top: 18px;
    right: 18px;
  }
`;

export const EyeOnIcon = styled(EyeOnSVG)`
  stroke: currentColor;
  fill: none;
`;

export const EyeOffIcon = styled(EyeOffSVG)`
  stroke: currentColor;
  fill: none;
`;
