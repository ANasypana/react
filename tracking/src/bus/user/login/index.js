import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { FormLogin } from '../../../common/form/formLogin';
import {book} from "../../../navigation/book";
import { validationSchema } from './validationSchema';
import { initialValues } from './initialValues';



import Styles from './styles/index.module.scss';

export const Login = () => {
  const history = useHistory();
  const { loginUser } = useUser();
  const onSubmit = data => { loginUser(data, history)};

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    isValid
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <section className={Styles.login}>
      <div className={Styles.content}>
        <h1>Добро пожаловать!</h1>
        <FormLogin
          isValid={isValid}
          handleSubmit={handleSubmit}
          getFieldProps={getFieldProps}
          getFieldMeta={getFieldMeta}/>
      </div>
    </section>
  )
};
