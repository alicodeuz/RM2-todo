import React from 'react'
import { StyledAddToDo } from './AddTodo.style';
import axios from '../../utils/axios';
import { useState } from 'react';

export default function AddToDo() {
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    content: '',
    due_date: '',
    is_important: false,
    is_completed: false,
    category: '',
    collection_id: null,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setTodo(prevState => ({ ...prevState, [name]: checked }));
    } else {
      setTodo(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/todos', { data: todo });
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  };

  const { title, content, category, is_completed, is_important, due_date } = todo;

  return (
    <StyledAddToDo>
      <p>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name='title'
          value={title}
          placeholder='Todo name'
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label htmlFor="content">Description</label>
        <textarea
          name='content'
          value={content}
          placeholder='Details'
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label htmlFor="due-date">Date</label>
        <input
          type='date'
          name='due_date'
          value={due_date}
          placeholder='Date'
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label htmlFor="due-date">Category</label>
        <select onChange={handleInputChange} value={category} name="category">
          <option value="todo">Todo</option>
          <option value="sport">Sport</option>
          <option value="education">Education</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </p>
      <p>
        <label htmlFor="due-date">Important? </label>
        <input
          type='checkbox'
          name='is_important'
          value={is_important}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label htmlFor="due-date">Completed?</label>
        <input
          type='checkbox'
          name='is_completed'
          value={is_completed}
          onChange={handleInputChange}
        />
      </p>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Creating...' : 'Add'}
      </button>
    </StyledAddToDo>
  )
}
