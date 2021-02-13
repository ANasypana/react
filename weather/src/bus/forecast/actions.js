// API
import { api } from '../../api';

// Types
import { types } from './types';

//Utils
import { dateTransform } from '../../common/utils/dateTransform';



export const forecastActions = Object.freeze({
  //Sync
  startFetching: () => ({type: types.START_FETCHING}),
  stopFetching: () => ({type: types.STOP_FETCHING}),
  daysFill: payload => ({type: types.DAYS_FILL, payload}),
  dayFill: payload => ({type: types.DAY_FILL, payload}),
  setFetchingError: err => ({type: types.SET_FETCHING_ERROR, error: true, payload: err}),
  setFilter: payload => ({type: types.SET_FILTER, payload}),
  clearFilter: () => ({type: types.CLEAR_FILTER}),

  //Async
  fetchForecast:  (limit=7) => async dispatch => {
    try {
      dispatch(forecastActions.startFetching());
      const res = await api.forecast.fetch(limit);

      if(res.ok){
        const { data } = await res.json();
        const forecast = data.map(d => ({...d, id: d.day.toString(), day: dateTransform(d.day)}));
        dispatch(forecastActions.daysFill(forecast));
        dispatch(forecastActions.stopFetching())
      }else {
        const message = res.status === 404 ? 'Not Found' : 'Something went wrong!';
        throw new Error(message)
      }
    }catch (err){
      dispatch(forecastActions.setFetchingError(err));
      dispatch(forecastActions.stopFetching());
    }
  },

})