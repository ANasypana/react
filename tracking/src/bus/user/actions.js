// API
import { api } from '../../api';

// Types
import { types } from './types';

import {book} from "../../navigation/book";


export const userActions = Object.freeze({
  //Sync
  startFetching: () => ({type: types.START_FETCHING}),
  stopFetching: () => ({type: types.STOP_FETCHING}),
  userFill: payload => ({type: types.USER_FILL, payload}),
  authTrue: payload => ({type: types.AUTH_TRUE, payload}),
  authFalse: () => ({type: types.AUTH_FALSE}),
  setFetchingError: err => ({type: types.SET_FETCHING_ERROR, error: true, payload: err}),
  userClean: () => ({type: types.USER_CLEAN}),

  //Async

  login:  (formData, history) => async dispatch => {
    try {
      dispatch(userActions.startFetching());
      const res = await api.login(formData);
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      const login = await res.json();

    }catch (err){
      dispatch(userActions.setFetchingError(err));
    }finally {
      dispatch(userActions.stopFetching());
      history.push(book.root)
    }
  },

  logout: history => async dispatch => {
    try {
      dispatch(userActions.startFetching());
      const res = await api.logout();
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      dispatch(userActions.authFalse());

    }catch (err){
      dispatch(userActions.setFetchingError(err));
    }finally {
      dispatch(userActions.stopFetching());
      history.push(book.root)
    }
  },

  getProfile:  () => async dispatch => {
    try {
      dispatch(userActions.startFetching());
      const res = await api.getProfile();

      if(!res.ok && res.status !== 401){
        const err = await res.json();
        throw new Error(err.message)
      }
      const { data } = await res.json();
      if(data){
        dispatch(userActions.authTrue(data));
      }
    }catch (err){
      dispatch(userActions.setFetchingError(err));
    }finally {
      dispatch(userActions.stopFetching());
    }
  },

  createUser: user => async dispatch => {
    try {
      dispatch(userActions.startFetching());
      const res = await api.createUser(user);
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      const { data } = await res.json();
      dispatch(userActions.userFill(data));

    }catch (err){
      dispatch(userActions.setFetchingError(err));

    }finally {
      dispatch(userActions.stopFetching());
    }
  },

  updateUser: (user) => async dispatch => {
    try {
      dispatch(userActions.startFetching());
      const res = await api.updateUser(user);
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      const { data } = await res.json();
      dispatch(userActions.userFill(data));

    }catch (err){
      dispatch(userActions.setFetchingError(err));

    }finally {
      dispatch(userActions.stopFetching());
    }
  },

})