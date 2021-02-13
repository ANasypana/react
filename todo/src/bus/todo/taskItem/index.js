import React from 'react';
import cn from 'classnames';
import { strToData } from '../../../common/utils/strToData';
import { tags } from '../taskCard/cardForm/formConstants';

export const TaskItem = ({task, isSelected, getTask}) => {
  const taskStyles = cn({
    task: true,
    completed: task.completed,
    selected: isSelected
  });

  const tagStyles = cn({
    tag: true,
    first: task.tag === tags[0],
    second: task.tag === tags[1],
    third: task.tag === tags[2],
    fourth: task.tag === tags[3],
    fifth: task.tag === tags[4]
  });

  return(

    <div
      onClick={()=> getTask(task.hash)}
      className={taskStyles}>
      <span className="title">{task.title}</span>
      <div className="meta">
        <span className="deadline">{strToData(task.deadline)}</span>
        <span className={tagStyles}>{task.tag}</span>
      </div>
    </div>
  )
}