import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {trackingActions} from '../actions';

export const useInitLifeScore = () => {
  const dispatch = useDispatch();
  const { result, restart } = useSelector(state => state.tracking);

  const score = result / 2;

  const getScore = useCallback( () => {
    dispatch(trackingActions.getResult())
  }, [restart]);

  const changeRestart = () => dispatch(trackingActions.restartFill(false));

  useEffect(() => {
    getScore()
    return () => changeRestart()
  }, [getScore, restart]);

  return { score }
}