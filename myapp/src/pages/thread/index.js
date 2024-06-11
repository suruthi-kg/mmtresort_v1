// AddTodoForm.js
import React, { useState } from 'react';

const AddTodoForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Todo added successfully');
      setText('');
    } catch (error) {
      console.error('There was a problem adding the todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
