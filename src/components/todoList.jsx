import './todoList.css'

function TodoList({ userTodos, handleDelete, handleCompleted}) {
  return (
    <div>
      {userTodos.map((todo => (
         <div className="todo-container" key={todo.id}>
                {/* <input type="checkbox" value={todo.completed} onChange={() => handleCompleted(todo.id)} /> */}
                <div>
                  <h4>{todo.title}</h4>
                  <p>{todo.category} . {todo.priority} . {todo.deadLine ? todo.deadLine : "No deadline"}</p>
                  <button onClick={() => handleDelete(todo.id)} style={{backgroundColor: 'blue', border: 'none', padding: '8px 11px'}}>Delete</button>
                </div>
            </div>
      )))}
    </div>
  )
}

export default TodoList;
