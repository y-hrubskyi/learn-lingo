import * as SC from './FormField.styled';

export const FormField = ({ placeholder, type, name }) => {
  return (
    <SC.FieldWrapper>
      <SC.Field type={type} name={name} placeholder={placeholder} />
      <SC.ErrorMessage name={name} component="span" />
    </SC.FieldWrapper>
  );
};
