import TodoItem from './todoItem';
import './todoList.css'

function TodoList({userTodos, handleStatus, handleDelete, updateTodo}) {

  

  return (
    <div>
      {userTodos.map((todo => (
         <TodoItem todo={todo} handleStatus={handleStatus} handleDelete={handleDelete} updateTodo={updateTodo}/>
      )))}
    </div>
  )
}

export default TodoList;
