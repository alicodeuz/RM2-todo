import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import axios from '../../utils/axios';
import { StyledToDoItem } from './ToDos.style';

export default function ToDoItem(props) {
  const { title, id, is_important, is_completed, collection_id, category, content, due_date } = props.data;
  const [isImportant, setIsImportant] = useState(is_important);
  const [isCompleted, setIsCompleted] = useState(is_completed);

  useEffect(() => {
    if (isImportant !== is_important) {
      handleImportant();
    }
  }, [isImportant]);

  useEffect(() => {
    if (isCompleted !== is_completed) {
      handleCompleted()
    }
  }, [isCompleted]);

  const handleCompleted = async () => {
    try {
      const { data } = await axios.put(`/todos/${id}`, { data: { is_completed: !is_completed } });
    } catch (error) {
      console.log(error)
    }
  };

  const handleImportant = async () => {
    try {
      const { data } = await axios.put(`/todos/${id}`, { data: { is_important: !is_important } });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <StyledToDoItem className="todo-item">
      <div>
        <input type="checkbox" onChange={() => setIsCompleted(!is_completed)} checked={isCompleted} />
      </div>
      <div className='todo-item__details'>
        <h4>{title}</h4>
        <p>{content}</p>
        <div >
          <span>{category}</span>
          <span>{due_date}</span>
        </div>
      </div>
      <button onClick={() => setIsImportant(!is_important)}> {isImportant ? <BsStarFill /> : <BsStar />} </button>
    </StyledToDoItem>
  )
}
