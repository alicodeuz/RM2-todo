import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { StyledTodos } from './ToDos.style';
import AddTodo from '../AddToDo';

import Mockdata from '../../Mocks/todos';
import ToDoItem from './ToDoItem';

export default function ToDos() {
  const location = useLocation();
  const params = useParams();

  return (
    <StyledTodos>
      <h2>Todo name</h2>
      <AddTodo />
      {
        Mockdata.map((item) => {
          return <ToDoItem key={item.id} data={item} />
        })
      }
    </StyledTodos>
  )
}
