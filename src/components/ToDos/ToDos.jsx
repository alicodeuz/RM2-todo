import React, { useEffect, useCallback, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import qs from 'qs';
import { StyledTodos } from './ToDos.style';
import AddTodo from '../AddToDo';
import axios from '../../utils/axios';

import ToDoItem from './ToDoItem';
import Loader from '../Loader/Loader';
import AppContext from '../../context/AppContext';

export default function ToDos() {
  const params = useParams();
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const { user } = useContext(AppContext);

  function filterByTodoType(todos) {
    const todoType = params.name;
    if (todoType === 'important') {
      return todos.filter(item => {
        return item.attributes.is_important
      })
    }
    if (todoType === 'my-day') {
      return todos.filter(item => {
        const isSameDate = new Date().toLocaleDateString() === new Date(item.attributes.due_date).toLocaleDateString()
        return isSameDate;
      })
    }
    if (todoType === 'completed') {
      return todos.filter(item => {
        return item.attributes.is_completed;
      })
    }
    return todos;
  }

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      // const { data } = await axios.get('/todos?filters[title][$contains]=th');
      const { data } = await axios.get(`/todos/?filters[user]=${user.id}&populate=user`);
      // const { data } = await axios.get(`/todos/?filters[is_important]=true&filters[is_completed]=true`);
      const { data: todos } = data;
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
  }, []);

  useEffect(() => {
    const result = filterByTodoType(todos);
    setFilteredTodos(result);
  }, [todos, params.name]);

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
        filteredTodos.map((item) => {
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
