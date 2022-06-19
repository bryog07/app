import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from './Task';
import '../Style-sheets/TaskList.css';

function TasksList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
      if(task.text.trim()){ /*verificacion de que la cadena no este vacia*/
        task.text = task.text.trim();/*quitando los espacios innecesario*/
        const updatedTask = [task, ...tasks];/*genera un arreglo con todas las tareas anteriores*/
        setTasks(updatedTask);/*se actualiza el estado*/
      }
    };

    const deleteTask = id =>{
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    };

    const completeTask = id =>{
      const updatedtasks = tasks.map(task =>{
        if(task.id === id){
          task.completed = !task.completed;
        }
        return task;
      });
      setTasks(updatedtasks);
    };

    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className='tasks-lists-container'>
                {
                   tasks.map((task) =>
                   <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                     />
                   ) 
                }
            </div>
        </>
    );
}

export default TasksList;