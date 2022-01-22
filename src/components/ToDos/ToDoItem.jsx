import { useEffect, useState, useContext } from 'react';
import { BsStar, BsStarFill, BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import AppContext from '../../context/AppContext';
import axios from '../../utils/axios';
import { StyledToDoItem } from './ToDos.style';


export default function ToDoItem({ fetchTodos, data, handleRemoveTodo }) {
  const { title, id, is_important, is_completed, collection_id, category, content, due_date } = data;
  const [isImportant, setIsImportant] = useState(is_important);
  const [isCompleted, setIsCompleted] = useState(is_completed);
  const { user } = useContext(AppContext);

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

  const handleRemove = async () => {
    try {
      Swal.fire({
        icon: 'warning',
        text: 'Are you sure to delete this todo?',
        showCancelButton: true
      }).then(async ({ isConfirmed }) => {
        if (isConfirmed) {
          const { data } = await axios.delete(`/todos/${id}`);
          console.log(data);
          // fetchTodos()
          handleRemoveTodo(id);
        }
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: JSON.stringify(error.response.data?.error?.message)
      })
    }
  }

  return (
    // <AppContext.Consumer>
    //   {(value) => (
    //     <StyledToDoItem className="todo-item">
    //       <div>
    //         <input type="checkbox" onChange={() => setIsCompleted(!is_completed)} checked={isCompleted} />
    //       </div>
    //       <div className='todo-item__details'>
    //         <h4>{title} {value.user.username}</h4>
    //         <p>{content}</p>
    //         <div >
    //           <span>{category}</span>
    //           <span>{due_date}</span>
    //         </div>
    //       </div>
    //       <button onClick={() => setIsImportant(!is_important)}> {isImportant ? <BsStarFill /> : <BsStar />} </button>
    //     </StyledToDoItem>
    //   )}
    // </AppContext.Consumer>

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

      <button onClick={handleRemove}> <BsTrash /> </button>
      <button onClick={() => setIsImportant(!is_important)}> {isImportant ? <BsStarFill /> : <BsStar />} </button>
    </StyledToDoItem>

  )
}
