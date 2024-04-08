import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => p.theme.spacing(5)} ${(p) => p.theme.spacing(16)};
`;
