import styled from 'styled-components';
import { Field } from 'formik';

import { BaseModalDescription } from '@/components/common/ModalBase/ModalBase.styled';

export const BookModalDescription = styled(BaseModalDescription)`
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const TeacherInfo = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(3.5)};
  margin-bottom: ${p => p.theme.spacing(8)};

  @media screen and (min-width: 1440px) {
    margin-bottom: ${p => p.theme.spacing(10)};
  }
`;

export const TeacherAvatar = styled.img`
  width: 44px;
  height: 44px;

  border-radius: ${p => p.theme.radii.avatar};
`;

export const TeacherAvatarLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  color: ${p => p.theme.colors.label};
`;

export const TeacherFullName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${p => p.theme.colors.primary()};
`;

export const ReasonRadioLegend = styled.div`
  margin-bottom: ${p => p.theme.spacing(5)};

  font-weight: 500;
  font-size: 24px;
  line-height: 1.33333;
  color: ${p => p.theme.colors.primary()};
`;

export const ReasonRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  margin-bottom: ${p => p.theme.spacing(5)};

  @media screen and (min-width: 1440px) {
    margin-bottom: ${p => p.theme.spacing(5.5)};
  }
`;

export const ReasonRadioLabel = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: ${p => p.theme.colors.primary()};

  user-select: none;
  cursor: pointer;

  &:hover input:not(:checked) + div {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const ReasonRadioField = styled(Field)`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + div {
    border-color: ${p => p.theme.colors.accent};
  }

  &:checked + div::after {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const CustomRadioBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;

  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 12px;
  background-color: transparent;

  transition:
    250ms linear background-color,
    250ms linear border-color;

  &::after {
    content: '';
    position: absolute;

    height: 10px;
    width: 10px;

    background-color: transparent;
    border-radius: 5px;

    transition: 250ms linear background-color;
  }
`;

export const ReasonRadioSpan = styled.span`
  margin-left: ${p => p.theme.spacing(8)};
`;
