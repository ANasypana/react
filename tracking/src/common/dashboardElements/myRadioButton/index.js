import React from 'react';
import cn from 'classnames';

import Styles from './styles/index.module.scss';


export const MyRadioButton = ({ label, targetValue, setValue, value })=>{

  const buttonStyles = cn({
    [Styles.answer]: true,
    [Styles.selected]: value === targetValue,

  });

  const handlerClicked = event => targetValue === value ? setValue('') : setValue(targetValue);

  return(
      <span
        className={buttonStyles}
        onClick={handlerClicked}
      >
        {label}
      </span>
  )
}