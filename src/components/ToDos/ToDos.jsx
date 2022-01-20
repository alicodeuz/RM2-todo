import React from 'react';
import { StyledTodos } from './ToDos.style';
import AddTodo from '../AddToDo';
import axios from '../../utils/axios';

import ToDoItem from './ToDoItem';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/todos');
      const { data: todos, meta: { pagination } } = data;
      setTodos(todos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [])
  console.log(todos)

  return (
    <StyledTodos>
      <h2>Todo name by</h2>
      {
        loading ? 'Loading...' : <AddTodo />
      }

      {
        todos.map((item) => {
          const { id, attributes } = item;
          return <ToDoItem key={id} data={{ ...attributes, id }} />
        })
      }

    </StyledTodos>
  )
}
