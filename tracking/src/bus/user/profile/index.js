import React from 'react';
import { UserForm } from '../../../common/form/formUser';
import { validationSchema } from '../../../common/form/formUser/validationSchema';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useTracking } from '../../tracking/hooks/useTracking';
import {book} from '../../../navigation/book';

import Styles from './styles/index.module.scss';


export const ProfileComponent = () => {
  const history = useHistory();
  const {user, isSexTouched, setIsSexTouched, updateUser } = useUser();
  const { clearAllResults } = useTracking();
  const onSubmit = data => { updateUser(data); history.push(book.login)};
  const initialValues = {...user, password: ''};

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
    <div className={Styles.content}>
      <h1>Профиль</h1>
      <UserForm
        handleSubmit={handleSubmit}
        getFieldMeta={getFieldMeta}
        getFieldProps={getFieldProps}
        isValid={isValid}
        setFieldValue={setFieldValue}
        isSexTouched={isSexTouched}
        setIsSexTouched={setIsSexTouched}
        resetForm={resetForm}
        isRegistration={false}
      />
      <button
        onClick={clearAllResults}
        className={Styles.clearData}
      >
        Сбросить данные
      </button>
    </div>
  )
};
