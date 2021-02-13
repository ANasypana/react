import React from 'react';
import { MyInput } from '../formElements/myIntut';
import { MyRadioBox} from '../formElements/myRadioBox';


import Styles from './styles/index.module.scss';

export const UserForm = ({handleSubmit, getFieldMeta, getFieldProps, isValid, setFieldValue,
                           setIsSexTouched, isSexTouched, resetForm, isRegistration=true}) => {

  const metaSex = getFieldMeta('sex');
  const metaEmail = getFieldMeta('email');
  const metaFname = getFieldMeta('fname');
  const metaLname = getFieldMeta('lname');
  const metaPassword = getFieldMeta('password');
  const metaAge = getFieldMeta('age');
  const metaHeight = getFieldMeta('height');
  const metaWeight = getFieldMeta('weight');

  const isTouched = isSexTouched || metaEmail.touched || metaFname.touched || metaFname.touched || metaLname.touched ||
    metaPassword.touched || metaAge.touched || metaHeight.touched || metaWeight.touched;

  return (
    <form onSubmit={handleSubmit}>
      <div className={Styles.gender}>
        <MyRadioBox
          label='Женщина'
          targetValue='f'
          name='sex'
          setIsSexTouched={setIsSexTouched}
          setFieldValue={setFieldValue}
          {...getFieldProps('sex')}
        />
        <MyRadioBox
          label='Мужчина'
          targetValue='m'
          name='sex'
          setIsSexTouched={setIsSexTouched}
          setFieldValue={setFieldValue}
          {...getFieldProps('sex')}
        />
      </div>
      {isSexTouched && metaSex.error && (
        <div className={Styles.error}>{metaSex.error}</div>
      )}
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Электронная почта'
        type='text'
        name='email'
        placeholder='Введите свой email:'
        meta={getFieldMeta('email')}
        {...getFieldProps('email')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Имя'
        type='text'
        name='fname'
        placeholder='Введите свое имя:'
        meta={getFieldMeta('fname')}
        {...getFieldProps('fname')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Фамилия'
        type='text'
        name='lname'
        placeholder='Введите свою фамилию:'
        meta={getFieldMeta('lname')}
        {...getFieldProps('lname')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Пароль'
        type='password'
        name='password'
        placeholder='Введите свой пароль:'
        meta={getFieldMeta('password')}
        {...getFieldProps('password')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Возраст'
        type='number'
        name='age'
        placeholder='Введите свой возраст:'
        meta={getFieldMeta('age')}
        {...getFieldProps('age')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Рост'
        type='number'
        name='height'
        placeholder='Введите свой рост:'
        meta={getFieldMeta('height')}
        {...getFieldProps('height')}
      />
      <MyInput
        inputStyles={Styles.inputRow}
        errStyles={Styles.error}
        label='Вес'
        type='number'
        name='weight'
        placeholder='Введите свой вес:'
        meta={getFieldMeta('weight')}
        {...getFieldProps('weight')}
      />
      <div>
        <button
          className={Styles.btn}
          disabled={!isTouched}
          onClick={resetForm}
          type='reset'
        >
          Сбросить
        </button>
        <button
          className={Styles.btn}
          disabled={!( isValid && isTouched)}
          type='submit'
        >
          {isRegistration ? 'Зарегистрироваться' : 'Обновить'}
        </button>
      </div>
    </form>
  )
};
