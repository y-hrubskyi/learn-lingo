import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Must be 7 or more').required('Required')
});
