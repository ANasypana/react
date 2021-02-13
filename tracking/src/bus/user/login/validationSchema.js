import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Should be valid email')
    .required('Email should be provided'),
  password: Yup.string().min(6, 'Must be 6 chars or more')
    .max(24, 'Must be 24 chars or less').required('Password must be provided'),

})