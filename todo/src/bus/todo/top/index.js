import React from 'react';
import {useTodo} from "../hooks/useTodo";


export const Top = () => {
  const { addNewTask, selectedTask } = useTodo();

  return(
    <div className='controls'>
      <button
        disabled={ selectedTask !== null }
        className='button-create-task'
        onClick={addNewTask}
      >
        New Task
      </button>
    </div>
  )
}