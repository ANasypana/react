import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { todoActions } from '../actions';


export const useTaskCard = () => {
  const dispatch = useDispatch();
  const [isTagTouched, setIsTagTouched ] = useState(false);
  const [isChecklistTouched, setIsChecklistTouched ] = useState(false);
  const [isDateTouched, setIsDateTouched ] = useState(false);
  const { selectedTask, isChangeSelectedTaskStatus } = useSelector(state => state.todo);
  const isChange = isChangeSelectedTaskStatus;

  const closeTask = event => {
    dispatch(todoActions.taskFill(null));
  };

  const changeStatusTask = event => {
    dispatch(todoActions.taskFill({...selectedTask, completed: !selectedTask.completed}));
    dispatch(todoActions.taskChangeStatus());
  }

  const deleteCard = event => {
    if(selectedTask.hash){
      dispatch(todoActions.deleteTask(selectedTask.hash))
    }
  }

  const onSubmit = data => {
    const newData = { ...data, completed: selectedTask.completed}
    if(selectedTask.hash){
      dispatch(todoActions.updateTask(selectedTask.hash, newData))
    }else {
      dispatch(todoActions.createTask(newData))
    }
  }

  return { isChecklistTouched, isTagTouched, setIsTagTouched, selectedTask,
    closeTask, changeStatusTask, deleteCard, onSubmit, isChange, setIsChecklistTouched, isDateTouched, setIsDateTouched }
}