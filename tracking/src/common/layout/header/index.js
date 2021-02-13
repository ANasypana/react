import React from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { book } from '../../../navigation/book';
import cn from 'classnames';

import Styles from './styles/index.module.scss';

export const  Header = ({ user, logoutUser }) => {
  const history = useHistory();
  const styleAvatar = cn({
    [Styles.avatar]: true,
    [Styles.female]: user?.sex === 'f',
    [Styles.male]: user?.sex === 'm',

  });
  const location = useLocation();
  const isHome = location.pathname === book.root;

  return (
    <div className={Styles.header}>
      <div>
        {!isHome &&
        <Link
          className={Styles.homeLink}
          to={book.root}>
          На главную
        </Link>}
      </div>
      <div className={styleAvatar}>
        <div className={Styles.column}>
          <Link to={book.profile} className={Styles.name}>{`${user?.fname} ${user?.lname}`}</Link>
          <button
            onClick={logoutUser(history)}
            className={Styles.logout}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  )
};