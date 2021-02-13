import React from 'react';
import { TaskItem } from '../taskItem';

export const Tasks = ({tasks, selectedHash, getTask}) => {
  const listOfTasks = tasks.map(tast =>
    <TaskItem
      key={tast.hash}
      getTask={getTask}
      task={tast}
      isSelected={selectedHash === tast.hash}
    />);

  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  )
 }