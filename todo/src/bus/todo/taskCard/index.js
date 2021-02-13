import React from 'react';
import { HeadTaskCard } from './head';
import { CardContent } from './card';
import {useTaskCard} from "../hooks/useTaskCard";

export const TaskCard = () => {
  const { closeTask } = useTaskCard();
  return (
    <div className="task-card">
     <HeadTaskCard/>
     <CardContent />
     <div className='btn-container'>
       <button
         onClick={closeTask}
         className='button-closed-task'
       >
         Closed Card
       </button>
     </div>
    </div>
  )
}