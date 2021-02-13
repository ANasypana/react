import React from 'react';
import Styles from './styles.module.scss';

export const NotFound = () => {
  return(
    <>
      <h1 className={Styles.largeTitle}>
        Page Not Found
      </h1>
      <p className={Styles.large}>Sorry, this page does not exist</p>
    </>
  )
}