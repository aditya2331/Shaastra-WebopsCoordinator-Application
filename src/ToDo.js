import React, { useState } from 'react';
import { AiTwotoneDelete } from "react-icons/ai"
import { BiEditAlt } from "react-icons/bi"
import { IoCloseCircleOutline } from "react-icons/io5"
import { IoCheckmarkCircleOutline } from "react-icons/io5"

const ToDo = ({todo, handleToggle, handleDelete, toDoList, setToDoList}) => {

    const [toDoEditing, setToDoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    const handleEdit = (id) => {
        let edited = toDoList.map(task => {
          if (task.id === id) {
            task.task = editingText
            task.complete = false
          }
          return task
        });
        setToDoList(edited)
        setToDoEditing(null)
        setEditingText()
      }

    return (
        <div className="todo-row">
            {toDoEditing === todo.id ? (
            <div className='iconsContainer'>
                 <input autoFocus required onChange={(e) => setEditingText(e.target.value)} value={editingText}></input>
                 <IoCheckmarkCircleOutline size={40} onClick={() => handleEdit(todo.id)}/>
                 <IoCloseCircleOutline size={40} onClick={() => setToDoEditing(null)}/>
             </div>) : 
             (<div className={todo.complete ? "strike" : "pendingtodo"} onClick={handleClick} id={todo.id}>
                {todo.task}
             </div>
             )}
             <div className='iconsContainer'>
              {toDoEditing === todo.id ? (<></>) : (<BiEditAlt size={40} onClick={() => setToDoEditing(todo.id)}/>)}
              <AiTwotoneDelete size={40} onClick={() => handleDelete(todo.id)}/>
             </div>                     
        </div>
    );
};

export default ToDo;