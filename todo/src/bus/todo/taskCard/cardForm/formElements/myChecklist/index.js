import React from 'react';
import { MyChecklistElement } from './myChecklistElement';
import { useChecklist } from '../../../../hooks/useChecklist';


export const MyChecklist = ({ name, value, setFieldValue, setIsChecklistTouched })=>{
  const tempSubTasks = value.length > 0 ? value.map(elm => ({...elm})) : [];

  if(tempSubTasks.length === 0 || tempSubTasks[tempSubTasks.length - 1].title !== ''){
    tempSubTasks.push({
      completed: false,
      title: ''
    });
  }

  const {isChanged, subTasks, setIsChanged, handleOnBlur, handleClicked,
    subTaskTitles, handlerOnChange } = useChecklist(tempSubTasks);

 if(isChanged){
   const subTaskValue = subTasks.filter(task => task.title !== '');
   setFieldValue(name, subTaskValue);
   setIsChecklistTouched(true)
   setIsChanged(false);
 }

  const listSubTask = tempSubTasks.map((subTask, index) =>
    <MyChecklistElement
      key={`subTask${index}`}
      task={subTask}
      handleOnBlur={handleOnBlur}
      handleClicked={handleClicked}
      indexSubTask={index}
      subTaskTitles={subTaskTitles}
      handlerOnChange={handlerOnChange}
    />)

  return(
    <div className='sub-tasks'>
      {listSubTask}
    </div>
  )
}
