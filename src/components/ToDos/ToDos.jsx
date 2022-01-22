import React, { useEffect, useCallback, useState } from 'react';
import { StyledTodos } from './ToDos.style';
import AddTodo from '../AddToDo';
import axios from '../../utils/axios';

import ToDoItem from './ToDoItem';
import Loader from '../Loader/Loader';

export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const fetchTodos = useCallback(async () => {
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
  }, [])

  const addNewTodo = useCallback((newTodo) => {
    setTodos(prevState => {
      console.log(prevState)
      return prevState.concat(newTodo)
    })
  }, []);

  const handleRemoveTodo = useCallback((id) => {
    const filteredTodos = todos.filter(i => i.id !== id);
    setTodos(filteredTodos);
  }, [todos]);

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <StyledTodos>
      <h2>Todo name by</h2>
      {
        showInput ?
          (<AddTodo
            fetchTodos={fetchTodos}
            addNewTodo={addNewTodo}
            hideInput={() => setShowInput(false)}
          />)
          :
          <button onClick={() => setShowInput(true)}>+ Todo</button>
      }


      <Loader loading={loading} />
      {
        todos.map((item) => {
          const { id, attributes } = item;
          return (
            <ToDoItem
              key={id}
              fetchTodos={fetchTodos}
              handleRemoveTodo={handleRemoveTodo}
              data={{ ...attributes, id }}
            />
          )
        })
      }

    </StyledTodos>
  )
}
