import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(p) => p.theme.spacing(5)};
  margin-bottom: ${(p) => p.theme.spacing(8)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(2)};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  text-align: center;
  color: ${(p) => p.theme.colors.label};

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
