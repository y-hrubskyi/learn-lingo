import styled from "styled-components";

import NoDataPlaceholderImg from "@/assets/img/placeholders/no-data.jpg";
import EmptyFavoritesPlaceholderImg from "@/assets/img/placeholders/empty-favorites.png";
import ErrorPlaceholderImg from "@/assets/img/placeholders/error.png";

const getPlaceholderImg = (props) => {
  switch (props["data-type"]) {
    case "no-data":
      return NoDataPlaceholderImg;
    case "empty-favorites":
      return EmptyFavoritesPlaceholderImg;
    case "error":
      return ErrorPlaceholderImg;
  }
};

export const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing(4)};
`;

export const PlaceholderImg = styled.div`
  width: 320px;
  height: 256px;

  background-image: url(${getPlaceholderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: ${(p) => p.theme.radii.card};

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 480px;
  }
`;

export const PlaceholderText = styled.p`
  max-width: 320px;
  padding: ${(p) => p.theme.spacing(4)};

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: ${(p) => p.theme.colors.primary()};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.card};

  @media screen and (min-width: 1440px) {
    max-width: 600px;
  }
`;
