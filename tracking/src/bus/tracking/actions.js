// API
import { api } from '../../api';

// Types
import { types } from './types';


export const trackingActions = Object.freeze({
  //Sync
  startFetching: () => ({type: types.START_FETCHING}),
  stopFetching: () => ({type: types.STOP_FETCHING}),
  activityFill: payload => ({type: types.ACTIVITY_FILL, payload}),
  resultFill: payload => ({type: types.RESULT_FILL, payload}),
  setFetchingError: err => ({type: types.SET_FETCHING_ERROR, error: true, payload: err}),
  restartFill: payload => ({type: types.RESTART_FILL, payload}),
  trackingClean: () => ({type: types.TRACKING_CLEAN}),

  //Async
  getResult:  () => async dispatch => {
    try {
      dispatch(trackingActions.startFetching());
      const res = await api.getResults();
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      const { data } = await res.json();
      dispatch(trackingActions.resultFill(data));
    }catch (err){
      dispatch(trackingActions.setFetchingError(err));
    }finally {
      dispatch(trackingActions.stopFetching());
    }
  },

  cleanResult: () => async dispatch => {
    try {
      dispatch(trackingActions.startFetching());
      const res = await api.resetResults();
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      dispatch(trackingActions.resultFill(0))

    }catch (err){
      dispatch(trackingActions.setFetchingError(err));
    }finally {
      dispatch(trackingActions.stopFetching());
    }
  },

  getActivity:  kind => async dispatch => {
    try {
      dispatch(trackingActions.startFetching());
      const res = await api.getActivity(kind);
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      const { data, hash } = await res.json();
      dispatch(trackingActions.activityFill({kind, data, hash}));
    }catch (err){
      dispatch(trackingActions.setFetchingError(err));
    }finally {
      dispatch(trackingActions.stopFetching());
    }
  },

  createActivity: (kind, kindData) => async dispatch => {
    try {
      dispatch(trackingActions.startFetching());
      const res = await api.addActivity(kind, kindData);
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      const { data } = await res.json();

      dispatch(trackingActions.activityFill({kind, hash: data.hash, data: kindData.value}));
      dispatch(trackingActions.restartFill(true));
    }catch (err){
      dispatch(trackingActions.setFetchingError(err));

    }finally {
      dispatch(trackingActions.stopFetching());
    }
  },

  updateActivity: (hash, kind, kindData) => async dispatch => {
    try {
      dispatch(trackingActions.startFetching());
      const res = await api.updateActivity(hash, kind, kindData);
      if(!res.ok){
        const err = await res.json();
        throw new Error(err.message)
      }
      dispatch(trackingActions.activityFill({kind, hash, data: kindData.value}));
      dispatch(trackingActions.restartFill(true));
    }catch (err){
      dispatch(trackingActions.setFetchingError(err));

    }finally {
      dispatch(trackingActions.stopFetching());
    }
  },

})