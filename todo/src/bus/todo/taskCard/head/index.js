import React from 'react';
import cn from 'classnames';
import { useTaskCard } from '../../hooks/useTaskCard';

export const HeadTaskCard = () => {
  const { selectedTask, deleteCard, changeStatusTask } = useTaskCard();

  const btnCompletedStyles = cn({
    'button-complete-task': true,
    completed: selectedTask.completed,
  });

  return (
    <div className="head">
      <button
        onClick={changeStatusTask}
        className={btnCompletedStyles}
      >
        Mark as complete
      </button>
      {selectedTask.hash && (
        <button
          onClick={deleteCard}
          className='button-delete-task'/>
      )}

    </div>

  )
}