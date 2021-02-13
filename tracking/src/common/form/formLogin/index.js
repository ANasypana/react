import React from 'react';
import { MyInput } from '../formElements/myIntut';

import Styles from './styles/index.module.scss';

export const FormLogin = ({handleSubmit, getFieldMeta, getFieldProps, isValid}) => {
  return(
    <form onSubmit={handleSubmit}>
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Электронная почта:'
        type='text'
        name='email'
        placeholder='Введите свой email'
        meta={getFieldMeta('email')}
        {...getFieldProps('email')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Пароль:'
        type='password'
        name='password'
        placeholder='Введите свой пароль'
        meta={getFieldMeta('password')}
        {...getFieldProps('password')}
      />
      <button
        className={Styles.btn}
        disabled={!isValid}
        type='submit'>
        Войти в систему
      </button>
    </form>
  )
}