import React from 'react';
import {useUser} from "../../../bus/user/hooks/useUser";
import {Header} from '../header';
import cn from 'classnames';

import Styles from './styles/index.module.scss';

export const Wrapper = ({children}) => {

  const {user, logoutUser} = useUser();
  const styleSidebar = cn({
    [Styles.sidebar]: true,
    [Styles.female]: user?.sex === 'f',
    [Styles.male]: user?.sex === 'm',

  });

  return(
    <section className={Styles.dashboard}>
      <div className={styleSidebar}></div>
      <div className={Styles.wrap}>
        <Header user={user} logoutUser={logoutUser}/>
        {children}
      </div>
    </section>
  )
}
