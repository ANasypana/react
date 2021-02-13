import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {trackingActions} from '../actions';

export const useInitActivity = kind => {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useSelector(state => state.tracking);

  const getActivity = useCallback(() => dispatch(trackingActions.getActivity(kind)), [kind]);

  useEffect(() => {
    if(data[kind] === null){
      getActivity();
    }
  }, [getActivity, kind]);

  return { data, isFetching, error }

}