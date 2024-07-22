import * as SC from './SubmitBtn.styled';

export const SubmitBtn = ({ children, isLoading }) => {
  return (
    <SC.Button type="submit" disabled={isLoading}>
      {children}
    </SC.Button>
  );
};
