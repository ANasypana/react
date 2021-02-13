import { useDispatch, useSelector } from 'react-redux';
import {useCallback, useEffect} from 'react';
import { todoActions } from '../actions';


export const useInit = () => {
  const dispatch = useDispatch();
  const { tasks, selectedTask, isFetching, error } = useSelector(state => state.todo);

  const getTasks = useCallback(() => {
    dispatch(todoActions.getTasks())
  }, []);

  useEffect(()=> {
    getTasks();
  }, [getTasks]);


  const getTask = hash => {
    dispatch(todoActions.getTask(hash))
  };

  const selectedHash = selectedTask !== null ? selectedTask.hash : null;

  return { selectedTask, tasks, selectedHash, isFetching, error, getTask }
}