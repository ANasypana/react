import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {trackingActions} from '../actions';

export const useRecordActivity = (kind) => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.tracking);
  const initialValues = data[kind] ? data[kind]?.data : '';
  const [value, setValue] = useState(initialValues);

  const updateActivity = (hash, data) => {
    dispatch(trackingActions.updateActivity(hash, kind, data));
  }

  const createActivity = data => {
    dispatch(trackingActions.createActivity(kind, data));
  };

  const onSubmit = event => data[kind]?.hash === 0 ?
    createActivity({value}) : updateActivity(data[kind]?.hash, {value});

  return { onSubmit, value, setValue }

}