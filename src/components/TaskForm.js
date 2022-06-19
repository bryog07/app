import React, { useState }from 'react';
import '../Style-sheets/TaskForm.css';
import {v4 as uuidv4 } from 'uuid';

function TaskForm(props){

    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value);
    };
    const handleShipping = e =>{
      e.preventDefault();

      const newTask ={
        id: uuidv4(),
        text:input,
        completed: false,
      };

      props.onSubmit(newTask);
    };

    return(
      <form
       className='task-form'
       onSubmit={handleShipping}>
        <input
          className='task-input'
          type='text'
          placeholder='Write a task'
          name='text'
          onChange={handleChange}
        />
        <button className='task-button'>
          Add Task
        </button>

      </form>
    )
}

export default TaskForm;