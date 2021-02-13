import React from 'react';

import Styles from './styles/index.module.scss';


export const MyNumberInput = ({ placeholder, setValue, value, max })=>{
  const handlerOnChange = event => {
    setValue(event.target.value)
  }

  return(
    <div className={Styles.inputRow}>
        <input
          type='number'
          min={0}
          max={max}
          placeholder={placeholder}
          onChange={handlerOnChange}
          value={value}
        />
    </div>
  )
}
