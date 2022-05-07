import React, { useState } from 'react';
import { IoAddCircleOutline } from "react-icons/io5"


const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <div className='add-task'>
            <input value={userInput} onChange={handleChange} placeholder="Start typing to add a task"></input>
            {userInput !== '' ? (<IoAddCircleOutline className='todo-button' size={50}  onClick={handleSubmit}/>) : (<IoAddCircleOutline className='todo-button' size={50}/>)}
        </div>
    )
}

export default ToDoForm;