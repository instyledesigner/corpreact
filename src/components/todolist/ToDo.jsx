import React, { useState, useEffect } from 'react';

const ToDo = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => { },[]);

    const [newTodo, setNewTodo] = useState('');
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    };

  return (
    <div>
        <h2>todo list</h2>
        <input type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='add todo item'
        />
        <button onClick={addTodo}>add item</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDo