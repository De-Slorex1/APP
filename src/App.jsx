import {useState, useEffect, useEffectEvent} from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  const [userTodos, setUserTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  //UseEffect hook is used for side effect, fetching of api, working with localstorage, mounting and unmounting of pages, it can use for timer or countdown,
  //it take a callback function or arrow function as first argument and an empty dependency array as the second argument.
  
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(userTodos))
  }, [userTodos])
 

  //Declared the function
const handleTodo = (todo) => {
  setUserTodos([...userTodos, todo])
}

const handleDelete = (todoId) => {
  let newArray = userTodos.filter((item) =>item.id !== todoId)
  setUserTodos(newArray)
}



console.log(userTodos)
  return (
    <>

      <TodoForm handleTodo={handleTodo} />
      <TodoList userTodos={userTodos} handleDelete={handleDelete} handleCompleted={handleCompleted} />
      

      {/* <h1>My username is {username} and I am {age} years old.</h1>
      <button onClick={changeName}>Click me</button> */}
    </>
  )
}

export default App;