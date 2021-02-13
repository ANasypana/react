import React from 'react';
import cn from 'classnames';
import { tags } from '../../formConstants';

export const MyRadioButton = ({ label, name, value, setFieldValue, setIsTagTouched })=>{
  const tagStyles = cn({
    tag: true,
    first: label === tags[0],
    second: label === tags[1],
    third: label === tags[2],
    fourth: label === tags[3],
    fifth: label === tags[4],
    selected: value === label,

  });

  const handleClicked = event => {
    setIsTagTouched(true);
    if(value === label){
      setFieldValue(name, '')
    }else {
      setFieldValue(name, label)
    }
  }

  return(
    <span
      onClick={handleClicked}
      className={tagStyles} >
      {label}
    </span>
  )
}