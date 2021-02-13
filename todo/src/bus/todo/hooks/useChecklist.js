import { useState } from 'react';

export const useChecklist = (tempSubTasks) =>{

  const [subTasks, setSubTasks] = useState(tempSubTasks);
  const listTitles = {};
  subTasks.forEach((elm, index)=>{listTitles[index] = elm.title});
  const [subTaskTitles, setSubTaskTitles] = useState(listTitles);
  const [isChanged, setIsChanged] = useState(false);

  const handlerOnChange = indexTask =>  event => {
    const newTaskTitles = {...subTaskTitles};
    newTaskTitles[indexTask] = event.target.value;
    setSubTaskTitles(newTaskTitles)
  };

  const handleOnBlur = indexTask => event => {
    const newTasks = subTasks.map((task, index)=> {
      if(index  === indexTask){
        return {...task, title: subTaskTitles[indexTask]}
      }
      return task
    });
    setSubTasks(newTasks);
    setIsChanged(true);
  };

  const handleClicked = indexTask => event => {
    if(subTasks[indexTask].title){
      const newTasks = subTasks.map((task, index)=> {
        if(index  === indexTask){
          return {...task, completed: !task.completed}
        }
        return {...task}
      });
      setSubTasks(newTasks);
      setIsChanged(true);
    }
  }

  return { subTaskTitles, setSubTaskTitles, isChanged, setIsChanged,
    setSubTasks, subTasks, handleOnBlur, handleClicked, handlerOnChange}
}