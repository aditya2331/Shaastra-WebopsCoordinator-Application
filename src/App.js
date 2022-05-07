import React, { useState } from 'react';
import data from "./data.json";
import './App.css';
import Header from './header';
import ToDo from './ToDo';
import ToDoForm from "./ToDoForm";

function App() {

  const [toDoList, setToDoList] = useState(data);
  const [selectedOption, setSelectedOption] = useState("all");
  const [searchInput, setSearchInput] = useState('');

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleDelete = (id) => {
    let deleted = toDoList.filter(task => {
      return task.id !== id;
    });
    setToDoList(deleted);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  }
  
  return (
    <div className="App">
      <Header />
        <h4 className='subheading'>
          Click on the text of any task to toggle completion, scroll down to add a task.
        </h4>
        <input onChange={handleSearchChange} placeholder="Look for a task"/>
        <select className='select-state' value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
          <option selected value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className='todo-app'>
           {toDoList.filter(todo => {
              if (searchInput === ""){
                return todo;
              }
              else if (todo.task.toLowerCase().includes(searchInput.toLowerCase())) { 
                return todo;
              }
            }).filter(todo => {
              if (selectedOption === "all")
                return todo;
              else if (selectedOption === "completed")
                return todo.complete === true;
              else if (selectedOption === "pending")
                return todo.complete === false;
            }).map(todo => {
               return (
                   <ToDo toDoList={toDoList} setToDoList={setToDoList} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
               )
              })}
      <ToDoForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
