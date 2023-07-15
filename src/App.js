import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleCheckTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✓ ${updatedTodos[index]}`;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className="button" onClick={handleAddTodo}>Add</button>
      <TodoList 
      todos={todos}
      handleCheckTodo={handleCheckTodo}
      handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default App;
