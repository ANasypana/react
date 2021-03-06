export const types = Object.freeze({
  // Sync
  START_FETCHING: '[TRACKING] - START_FETCHING',
  STOP_FETCHING: '[TRACKING] - STOP_FETCHING',
  ACTIVITY_FILL: '[TRACKING] - ACTIVITY_FILL',
  RESULT_FILL: '[TRACKING] - RESULT_FILL',
  RESTART_FILL: '[TRACKING] - RESTART_FILL',

  SET_FETCHING_ERROR: '[TRACKING] - SET_FETCHING_ERROR',
  TRACKING_CLEAN: '[TRACKING] - TRACKING_CLEAN',


  //Async
  GET_RESULT: '[TRACKING] - GET_RESULT',
  CLEAN_RESULT: '[TRACKING] - CLEAN_RESULT',
  GET_ACTIVITY: '[TRACKING] -  GET_ACTIVITY',
  CREATE_ACTIVITY: '[TRACKING] - CREATE_ACTIVITY',
  UPDATE_ACTIVITY: '[TRACKING] - UPDATE_ACTIVITY',

})
