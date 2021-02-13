import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import {trackingActions} from '../../tracking/actions';
import {book} from "../../../navigation/book";

export const useUser = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.user);
  const [isSexTouched, setIsSexTouched] = useState(false);


  const loginUser = (data, histoty) => {
    dispatch(userActions.login(data, histoty))
  }

  const logoutUser = history => event => {
    dispatch(userActions.logout(history));
    dispatch(trackingActions.trackingClean());
    dispatch(userActions.userClean());

  }

  const createUser = data => {
    dispatch(userActions.createUser(data))
  }

  const updateUser = data => {
    dispatch(userActions.updateUser(data))
  }

  const cleanAll = event => {
    dispatch(userActions.userClean())
  }





  return { isAuthenticated, user, loginUser, createUser, isSexTouched, setIsSexTouched,
    logoutUser, updateUser, cleanAll }
}