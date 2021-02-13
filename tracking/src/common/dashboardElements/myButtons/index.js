import React from 'react';
import { MyButton } from './MyButton';

import Styles from './styles/index.module.scss';


export const MyButtons = ({ setValue, value })=>{
  const arr = Array(13).fill(1);
  const buttonList = arr.map((elm, index) => <MyButton key={index} value={value} setValue={setValue} targetValue={index+1}/>);
  const volume = ( Number(value) * 250 ).toFixed();

  return(
    <div className={Styles.elements}>
      {buttonList}
      <span className={Styles.size}>{`${volume} мл`}</span>
    </div>
  )
}