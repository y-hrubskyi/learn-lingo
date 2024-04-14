import styled from "styled-components";

import BookSVG from "@/assets/icons/book.svg?react";
import StarSVG from "@/assets/icons/star.svg?react";
import HeartSVG from "@/assets/icons/heart.svg?react";

export const TeacherCard = styled.li`
  display: flex;
  gap: ${(p) => p.theme.spacing(12)};
  padding: 24px;

  border-radius: ${(p) => p.theme.radii.card};
  background: ${(p) => p.theme.colors.primaryBg};
`;

export const TeacherAvatarWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  width: 120px;
  height: 120px;

  border: 3px solid ${(p) => p.theme.colors.hover};
  border-radius: ${(p) => p.theme.radii.avatar};
`;

export const TeacherAvatar = styled.img`
  width: 100px;
  height: 100px;

  border-radius: ${(p) => p.theme.radii.avatar};
`;

export const TeacherStatus = styled.span`
  position: absolute;
  top: 14%;
  right: 14%;

  width: 12px;
  height: 12px;

  border-radius: 100%;
  border: 2px solid ${(p) => p.theme.colors.primaryBg};
  background-color: ${(p) => p.theme.colors.green};
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(8)};
  width: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.label};
  text-decoration: none;
`;

export const TeacherFullName = styled.p`
  margin-top: ${(p) => p.theme.spacing(2)};

  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${(p) => p.theme.colors.primary()};
`;

export const RightHeaderBlock = styled.div`
  display: flex;
  align-self: start;
`;

export const AboutTeacher = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing(8)};
  margin-right: ${(p) => p.theme.spacing(16)};
`;

export const TeacherInfo = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};

  &:not(:last-child):after {
    content: "";
    position: absolute;
    z-index: 1;
    right: -16.5px;

    width: 1px;
    height: 16px;

    background: ${(p) => p.theme.colors.primary(0.2)};
  }
`;

export const BookIcon = styled(BookSVG)`
  width: 16px;
  height: 16px;

  fill: none;
  stroke: ${(p) => p.theme.colors.primary()};
`;

export const Price = styled.span`
  color: ${(p) => p.theme.colors.green};
`;

export const HeartBtn = styled.button`
  width: 26px;
  height: 26px;
  padding: 0;

  background-color: transparent;
  border: none;
`;

export const HeartIcon = styled(HeartSVG)`
  stroke: ${(p) =>
    p["data-is-favorite"] ? p.theme.colors.accent : p.theme.colors.primary()};
  fill: ${(p) => (p["data-is-favorite"] ? p.theme.colors.accent : "none")};

  transition: ${(p) => p.theme.transition("stroke")},
    ${(p) => p.theme.transition("fill")};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2)};
  margin-bottom: ${(p) => p.theme.spacing(4)};
`;

export const Info = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.primary()};
`;

export const LanguageList = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const ReadMoreBtn = styled.button`
  padding: 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.primary()};

  text-decoration: underline;
  text-decoration-skip-ink: none;
  background-color: transparent;
  border: none;

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const Experience = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(8)};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.primary()};
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(8)};
`;

export const ReviewerInfo = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing(3)};
  margin-bottom: ${(p) => p.theme.spacing(4)};
`;

export const ReviewerAvatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;

  font-weight: 500;
  color: ${(p) => p.theme.colors.primary()};

  border: 2px solid ${(p) => p.theme.colors.accent};
  background-color: ${(p) => p.theme.colors.hover};
  border-radius: ${(p) => p.theme.radii.avatar};
`;

export const ReviewerRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};
  margin-top: ${(p) => p.theme.spacing(0.5)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.primary()};
`;

export const StarIcon = styled(StarSVG)`
  width: 16px;
  height: 16px;

  fill: ${(p) => p.theme.colors.accent};
`;

export const LevelList = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const LevelItem = styled.li`
  padding: ${(p) => p.theme.spacing(2)} ${(p) => p.theme.spacing(3)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.14286;
  color: ${(p) => p.theme.colors.primary()};

  background-color: ${(p) =>
    p["data-is-filtered"] ? p.theme.colors.accent : "transparent"};
  border: 1px solid ${(p) => p.theme.colors.primary(0.2)};
  border-radius: 35px;
`;

export const ActionBtn = styled.button`
  align-self: start;
  padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(12)};

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(p) => p.theme.colors.primary()};

  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.btn};
  border: none;

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
