import styled from "styled-components";

export const PageWrapper = styled.div`
  padding-top: ${(p) => p.theme.spacing(8)};
  padding-bottom: ${(p) => p.theme.spacing(24)};
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(p) => p.theme.spacing(16)};
  padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(12)};

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(p) => p.theme.colors.primary()};

  border-radius: ${(p) => p.theme.radii.btn};
  border: none;
  background: ${(p) => p.theme.colors.accent};

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
