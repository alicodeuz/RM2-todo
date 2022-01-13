import React from 'react';
import { BsStar } from 'react-icons/bs';
import { StyledToDoItem } from './ToDos.style';

export default function ToDoItem(props) {
  const { title, is_important, is_completed, collection_id, category, content, due_date } = props.data;
  console.log(props.data)
  return (
    <StyledToDoItem className="todo-item">
      <div><input type="checkbox" /></div>
      <div className='todo-item__details'>
        <h4>{title}</h4>
        <p>{content}</p>
        <div >
          <span>{category}</span>
          <span>{due_date}</span>

        </div>
      </div>
      <div><BsStar /></div>
    </StyledToDoItem>
  )
}
