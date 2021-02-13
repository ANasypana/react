import React from 'react';
import cn from 'classnames';

import Styles from './styles/index.module.scss';


export const MyRadioBox = ({ label, targetValue, name, value, setFieldValue, setIsSexTouched })=>{

  const sexStyles = cn({
    [Styles.radioBox]: true,
    [Styles.female]: targetValue === 'f',
    [Styles.male]: targetValue === 'm',
    [Styles.selected]: targetValue === value,

  });

  const handlerClicked = event => {
    if(value === targetValue){
      setFieldValue(name, '')
    }else {
      setFieldValue(name, targetValue)
    }
    setIsSexTouched(true)
  }

  return(
    <div
      className={sexStyles}
      onClick={handlerClicked}
    >
       <span>{label}</span>
    </div>
  )
}