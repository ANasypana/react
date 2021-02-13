// Types
import {types} from './types';

const initialState = {
  result: 0,
  restart: false,
  data: {
    breakfast: null,
    coffee: null,
    dinner: null,
    fruits: null,
    junk: null,
    lunch: null,
    sleep: null,
    steps: null,
    vegetables: null,
    water: null,
  },
  isFetching: false,
  error: null,
};

export const trackingReducer = (state = initialState, {type, payload}) => {
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
      };
    case types.RESULT_FILL:
      return {
        ...state,
        error: null,
        result: Number(payload)
      };
    case types.ACTIVITY_FILL:
      return {
        ...state,
        error: null,
        data: {...state.data, [payload.kind]: {data: payload.data, hash: payload.hash}}
      };

    case types.TRACKING_CLEAN: {
      return {
        ...state,
        data: {
          breakfast: null,
          coffee: null,
          dinner: null,
          fruits: null,
          junk: null,
          lunch: null,
          sleep: null,
          steps: null,
          vegetables: null,
          water: null,
        },
        isFetching: false,
        restart: false,
        error: null,
      }
    };
    case types.RESTART_FILL:
      return {
        ...state,
        restart: payload,
      };

    default:
      return state
  }
}