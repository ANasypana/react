// Types
import {types} from './types';

const initialState = {
  tasks:[],
  selectedTask: null,
  isChangeSelectedTaskStatus: false,
  isFetching: false,
  error: null,
};

export const todoReducer = (state = initialState, {type, payload}) => {
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
        tasks:[],
        selectedTask: null,
        isChangeSelectedTaskStatus: false
      };
    case types.TASKS_FILL:
      return {
        ...state,
        error: null,
        tasks: [ ...payload],
        selectedTask: null,
        isChangeSelectedTaskStatus: false
      };
    case types.TASK_FILL: {
      return {
        ...state,
        selectedTask: payload,
        isChangeSelectedTaskStatus: payload === null ? false : state.isChangeSelectedTaskStatus
      }
    };

    case types.TASK_CHANGE_STATUS: {
      return {
        ...state,
        isChangeSelectedTaskStatus: !state.isChangeSelectedTaskStatus
      }
    };

    default:
      return state
  }
}