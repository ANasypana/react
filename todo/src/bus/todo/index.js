import React from 'react';
import cn from 'classnames';
import { Spinner } from '../../common/layout/spinner/Spinner';
import { Top } from './top';
import {Tasks} from './tasks';
import { TaskCard } from './taskCard';
import { useInit } from './hooks/useInit';


export const TodoManager = () => {
  const { tasks, selectedHash, isFetching, error, getTask } = useInit();

  const listStyles = cn({
    list: true,
    empty: tasks.length === 0,
  });

  if(error){
    return (
      <main>
        <div className='error' >
          <h3>{error.message}</h3>
        </div>
      </main>
    )
  };

  return(
    <main>
      {isFetching ? <Spinner/> :
        <>
          <Top />
          <div className="wrap">
            <div className={listStyles}>
              <Tasks
                tasks={tasks}
                getTask={getTask}
                selectedHash = {selectedHash}
              />
            </div>
            {selectedHash !== null && <TaskCard/>}
          </div>
        </>
      }
    </main>
  )
}

