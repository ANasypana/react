import {useEffect, useCallback} from 'react';
import { userActions } from '../../user/actions';
import { useDispatch, useSelector } from 'react-redux';


export const useInit = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, error, isFetching } = useSelector(state => state.user);

  useEffect(()=>{
    if (!isAuthenticated){
      dispatch(userActions.getProfile())
    }
      }, []);

  const cleanAll = event => {
    dispatch(userActions.userClean())
  }


  return { isAuthenticated, error, isFetching, cleanAll }
}