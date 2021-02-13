// Types
import {types} from './types';

const initialState = {
  user: null,
  isAuthenticated: false,
  isFetching: false,
  error: null,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case types.START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        user: null,
        isAuthenticated: false
      };
    case types.AUTH_TRUE:
      return {
        ...state,
        error: null,
        user: payload,
        isAuthenticated: true
      };
    case types.AUTH_FALSE:
      return {
        ...state,
        error: null,
        user: null,
        isAuthenticated: false
      };
    case types.USER_FILL: {
      return {
        ...state,
        user: payload
      }
    };
    case types.USER_CLEAN: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isFetching: false,
        error: null
      }
    };

    default:
      return state
  }
}