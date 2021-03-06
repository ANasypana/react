export const types = Object.freeze({
  // Sync
  START_FETCHING: '[USER] - START_FETCHING',
  STOP_FETCHING: '[USER] - STOP_FETCHING',
  USER_FILL: '[USER] - USER_FILL',
  AUTH_TRUE: '[USER] - AUTH_TRUE',
  AUTH_FALSE: '[USER] - AUTH_FALSE',
  SET_FETCHING_ERROR: '[USER] - SET_FETCHING_ERROR',
  USER_CLEAN: '[USER] - USER_CLEAN',


  //Async
  LOGIN: '[USER] - LOGIN_ASYNC',
  LOGOUT: '[USER] - LOGOUT_ASYNC',
  CREATE_USER: '[USER] - CREATE_USER_ASYNC',
  UPDATE_USER: '[USER] - UPDATE_USER_ASYNC',
  GET_PROFILE: '[USER] - GET_PROFILE_ASYNC',

})
