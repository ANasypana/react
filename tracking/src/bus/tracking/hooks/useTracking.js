import { useDispatch, useSelector } from 'react-redux';
import {trackingActions} from '../actions';

export const useTracking = () => {
  const dispatch = useDispatch();
  const { result, breakfast,  coffee, dinner, fruits, junk, lunch, sleep,
    steps, vegetables, water, isFetching, error } = useSelector(state => state.tracking);

  const clearAllResults = event => {
    dispatch(trackingActions.cleanResult());
    dispatch(trackingActions.trackingClean());
  }

  return { clearAllResults }

}

