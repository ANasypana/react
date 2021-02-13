// Types
import {types} from './types';

const initialState = {
  days:[],
  downloadedDays: [],
  currentDay: null,
  isFetching: false,
  error: null,
};

export const forecastReducer = (state = initialState, {type, payload}) => {
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
        days : [],
        currentDay: null,
        downloadedDays: []
      };
    case types.DAYS_FILL:
      return {
        ...state,
        error: null,
        days: [ ...payload],
        currentDay: payload.length ? payload[0] : null,
        downloadedDays: []
      };
    case types.DAY_FILL: {
      let currentDay = null;
      if(state.days.length){
        const findDay = state.days.find(day => day.id === payload);
        currentDay = findDay !== undefined ? findDay : null
      }
      return {
        ...state,
        currentDay
      }
    }
    case types.SET_FILTER: {
      const downloadedDays = [...state.days];
      const days = state.days.filter(day => {
        let result = true;
        if(payload.type){
          result = result && day.type === payload.type
        }
        if(typeof(payload.temperatureMin) === 'number'){
          result = result && day.temperature >= payload.temperatureMin
        }
        if(typeof(payload.temperatureMax) === 'number'){
          result = result && day.temperature <= payload.temperatureMax
        }
        return result
      });

      const currentDay = days.length ? days[0] : null;

      return {
        ...state,
        days,
        currentDay,
        downloadedDays
      };
    }
    case types.CLEAR_FILTER: {

      return {
        ...state,
        days: [...state.downloadedDays],
        currentDay: state.downloadedDays.length ? state.downloadedDays[0] :null,
        downloadedDays: []
      }
    }

    default:
      return state
  }
}