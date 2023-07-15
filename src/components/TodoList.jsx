import './TodoList.css';
import React from 'react';

const TodoList = ({ todos, handleCheckTodo, handleRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo}</span>
          <button onClick={() => handleCheckTodo(index)}>
            Mark as Complete
          </button>
          <button onClick={() => handleRemoveTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
