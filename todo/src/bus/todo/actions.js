// API
import { api } from '../../api';

// Types
import { types } from './types';

//Utils
import { strToData } from '../../common/utils/strToData';

export const todoActions = Object.freeze({
  //Sync
  startFetching: () => ({type: types.START_FETCHING}),
  stopFetching: () => ({type: types.STOP_FETCHING}),
  tasksFill: payload => ({type: types.TASKS_FILL, payload}),
  taskFill: payload => ({type: types.TASK_FILL, payload}),
  setFetchingError: err => ({type: types.SET_FETCHING_ERROR, error: true, payload: err}),
  taskChangeStatus: () => ({type: types.TASK_CHANGE_STATUS}),

  //Async
  getTasks:  () => async dispatch => {
    try {
      dispatch(todoActions.startFetching());
      const res = await api.getTasks();
      const { data } = res;
      if(!data){
        throw new Error(res.message)
      }
      const tasks = data.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .map(task => ({...task, deadline: strToData(task.deadline)}));

      dispatch(todoActions.tasksFill(tasks));

    }catch (err){
      dispatch(todoActions.setFetchingError(err));
    }finally {
      dispatch(todoActions.stopFetching());
    }
  },

  getTask:  hash => async dispatch => {
    try {
      dispatch(todoActions.startFetching());
      const res = await api.getTask(hash);
      const { data } = res;
      if(!data){
        throw new Error(res.message)
      }
      dispatch(todoActions.taskFill(data));

    }catch (err){
      dispatch(todoActions.setFetchingError(err));
    }finally {
      dispatch(todoActions.stopFetching());
    }
  },


  createTask: task => async dispatch => {
    try {
      dispatch(todoActions.startFetching());
      const res = await api.createTask(task);
      if(!res.data){
        throw new Error(res.message)
      }
      const { data } = await api.getTasks();
      dispatch(todoActions.tasksFill(data));

    }catch (err){
      dispatch(todoActions.setFetchingError(err));
    }finally {
      dispatch(todoActions.stopFetching());
    }
  },
  updateTask: (hash, task) => async dispatch => {
    try {
      dispatch(todoActions.startFetching());
      const res = await api.updateTask(hash, task);
      if(!res.data){
        throw new Error(res.message)
      }
      const { data } = await api.getTasks();
      dispatch(todoActions.tasksFill(data));

    }catch (err){
      dispatch(todoActions.setFetchingError(err));
    }finally {
      dispatch(todoActions.stopFetching());
    }
  },

  deleteTask: hash => async dispatch => {
    try {
      const res = await api.deleteTask(hash);
      if(res.status !== 204){
        throw new Error(res.message)
      }
      const { data } = await api.getTasks();
      dispatch(todoActions.tasksFill(data));

    }catch (err){
      dispatch(todoActions.setFetchingError(err));
    }finally {
      dispatch(todoActions.stopFetching());
    }
  }



})