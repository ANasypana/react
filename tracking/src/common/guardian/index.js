import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthenticated } from '../../bus/user/hooks/useAuthenticated';


export const Guardian = ({children}) => {
  const history = useHistory();
  const  { isAuthenticated } = useAuthenticated(history);

  return(
    <>
      {children}
    </>
  )
}