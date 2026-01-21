import React from 'react'

function TodoList({ userTodos }) {
  return (
    <div>
      {userTodos.map(todo => (
        <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>category: {todo.category}</p>
            <p>Priority: {todo.priority}</p>
            <p>Date: {todo.deadLine}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoList;
