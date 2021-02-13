import React from 'react';

export const MyInput= ({label, link, ...props})=>{
  return(
    <>
      <label htmlFor= {props.id || props.name}>{label}</label>
      <input ref={link} {...props}/>
    </>
  )
}