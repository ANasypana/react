import React from 'react';
import cn from 'classnames';

export const MyChecklistElement = ({ task, indexSubTask,  handleOnBlur, handlerOnChange,
                                     handleClicked, subTaskTitles}) => {

  const subTaskStyles = cn({
    'sub-task': true,
    completed: task.title !== '' ? task.completed : false
  });

  return(
    <div
      onClick={handleClicked(indexSubTask)}
      className={subTaskStyles}>
      <span className='button'></span>
      <input
        onChange={handlerOnChange(indexSubTask)}
        onBlur={handleOnBlur(indexSubTask)}
        type='text'
        placeholder='Add new sub-task..'
        value={subTaskTitles[indexSubTask]}  />
    </div>
  )
}