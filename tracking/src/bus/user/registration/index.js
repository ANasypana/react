import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { UserForm } from '../../../common/form/formUser';
import { validationSchema } from '../../../common/form/formUser/validationSchema';
import { initialValues } from './initialValues';
import {book} from '../../../navigation/book';

import Styles from './styles/index.module.scss';

export const Registration = () => {
  const history = useHistory();
  const { createUser, isSexTouched, setIsSexTouched } = useUser();
  const onSubmit = data => { createUser(data); history.push(book.login)};

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    setFieldValue,
    resetForm,
    isValid
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <section className={Styles.registration}>
      <div className={Styles.left}>
        <div className={Styles.content}>
          <h1>Регистрация</h1>
          <UserForm
            handleSubmit={handleSubmit}
            getFieldMeta={getFieldMeta}
            getFieldProps={getFieldProps}
            isValid={isValid}
            setFieldValue={setFieldValue}
            isSexTouched={isSexTouched}
            setIsSexTouched={setIsSexTouched}
            resetForm={resetForm}
          />
        </div>
      </div>
      <div className={Styles.right}></div>
    </section>
  )
};
