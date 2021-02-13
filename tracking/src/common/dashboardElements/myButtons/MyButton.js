import React from 'react';
import cn from 'classnames';

import Styles from './styles/index.module.scss';


export const MyButton = ({ targetValue, value, setValue })=>{
  const handlerClick = event => {
    if(value === targetValue){
      const selectValue = targetValue - 1 >= 0 ? targetValue - 1 : 0;
     setValue(selectValue);
    }else {
      setValue(targetValue)
    }
  };

  const buttonStyles = cn({
    [Styles.element]: true,
    [Styles.selected]: targetValue <= value,

  });

  return(
    <button
      onClick={handlerClick}
      className={buttonStyles}
    ></button>
  )
}