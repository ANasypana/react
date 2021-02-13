import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Should be valid email')
    .required('Email should be provided'),
  password: Yup.string().min(6, 'Must be 6 chars or more')
    .max(24, 'Must be 24 chars or less').required('Password must be provided'),
  fname: Yup.string().min(2, 'Must be 2 chars or more')
    .max(24, 'Must be 24 chars or less').required('Name must be provided'),
  lname: Yup.string().min(2, 'Must be 2 chars or more')
    .max(24, 'Must be 24 chars or less').required('Surname must be provided'),
  sex: Yup.string().oneOf(['f', 'm'], 'You should put a correct gender')
    .required('Gender should be selected'),
  age: Yup.number().integer().min(6, 'You should put a correct age, more than 6')
    .max(100, 'You should put a correct age'),
  weight: Yup.number().integer().min(30, 'You should put a correct weight, more than 30')
    .max(240, 'You should put a correct weight').required('Weight should be provided'),
  height: Yup.number().integer().min(1, 'You should put a correct height')
    .max(260, 'You should put a correct height')
})