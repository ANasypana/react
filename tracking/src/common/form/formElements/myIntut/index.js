import React from 'react';

export const MyInput= ({label, meta, inputStyles, errStyles,  ...props})=>{
  return(
    <>
      <div className={inputStyles}>
        <label htmlFor= {props.id || props.name}>{label}</label>
        <input {...props}/>
      </div>
      {meta.touched && meta.error && (<p className={errStyles}> {meta.error} </p>)}
    </>
  )
}