import React from 'react';

export const MyTextarea = ({label, ...props}) => {

  return (
    <>
      <span
        className={props.styles ?? ''}
        htmlFor= {props.id || props.name}>
        {label}
      </span>
      <textarea className='text' {...props}/>
    </>
  )

}