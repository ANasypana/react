import React from 'react';
import  { Link } from 'react-router-dom';
import { Spinner } from '../../common/layout/spinner';
import { Dashboard } from '../dashboard';
import { book } from '../../navigation/book';
import { useInit } from './hooks/useInit';


//Style
import Styles from './styles/index.module.scss';

export const Home = () => {
  const { isAuthenticated, error, isFetching, cleanAll } = useInit();

  if(error){
    return (
      <section className={Styles.home}>
        <div className={Styles.error} >
          <h3>{error.message}</h3>
          <div className={Styles.buttons}>
            <Link
              onClick={cleanAll}
              to={book.root}
              className={Styles.btn}>
              Try Again
            </Link>
          </div>
        </div>
      </section>
    )
  };

  if(isAuthenticated){
    return isFetching ? <Spinner/> :<Dashboard />
  }

  return (
    <>
      { isFetching ? <Spinner/> :
        <section className={Styles.home}>
          <div className={Styles.content}>
            <h1>Добро пожаловать!</h1>
            <div className={Styles.buttons}>
              <Link to={book.registration} className={Styles.btn}>Sign Up</Link>
              <Link to={book.login} className={Styles.btn}>Login</Link>
            </div>
          </div>
        </section>
      }
    </>
  )
};
