import React, { useState } from 'react'

function TodoItem({todo, handleStatus, handleDelete, updateTodo}) {
    const [isEditing, setIsEditing] = useState(false)
    const [edited, setEdited] = useState({...todo})


    function saveEdit() {
        updateTodo(edited)
        setIsEditing(false)
    }
   

  return (
    <div className={`todo-container ${todo.status ? "done" : ""}`} key={todo.id}>
                <input type="checkbox" value={todo.status}  onChange={() => handleStatus(todo.id)}/>
                {isEditing ? (
                    <div>
                        <input type='text' value={edited.title} style={{width: '300px'}} onChange={(e) => setEdited({...edited, title: e.target.value})}/><br/>
                        <button onClick={saveEdit}>Save</button>
                    </div>
                ) :
                (
                    <div>
                        <h4>{todo.title}</h4>
                        <p>{todo.category} . {todo.priority} . {todo.deadLine ? todo.deadLine : "No deadline"} </p>
                        <button onClick={() => handleDelete(todo.id)} style={{backgroundColor: 'blue', border: 'none', margin: '0px 4px', padding: '10px 15px'}}>Delete</button>
                        <button onClick={() => setIsEditing(!isEditing)}>
                            {isEditing ? "Cancel" : "Edit"}
                        </button>
                    </div>
                )}
                    
            </div>
  )
}

export default TodoItem;
