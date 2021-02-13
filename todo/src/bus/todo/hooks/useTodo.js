import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../actions';
import { ceilDate } from '../../../common/utils/ceilDate'

export const useTodo = () => {
  const dispatch = useDispatch();
  const { tasks, selectedTask, isFetching, error } = useSelector(state => state.todo);

  const defaultSelectedTask = {
    completed: false,
    title: '',
    description: '',
    deadline: ceilDate(new Date()),
    tag: '',
    checklist: []
  }

  const addNewTask = event => {
    if(selectedTask !== null){
      dispatch(todoActions.taskFill(null))
    }
    dispatch(todoActions.taskFill(defaultSelectedTask))
  };


  return { selectedTask, tasks, addNewTask }
}