import * as SC from "./Placeholder.styled";

export const Placeholder = ({ type, children }) => {
  return (
    <SC.PlaceholderWrapper>
      <SC.PlaceholderImg data-type={type} />
      <SC.PlaceholderText>{children}</SC.PlaceholderText>
    </SC.PlaceholderWrapper>
  );
};
