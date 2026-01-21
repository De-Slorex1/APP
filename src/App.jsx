import {useState, useEffect} from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  const [userTodos, setUserTodos] = useState([])

  //UseEffect hook is used for side effect, fetching of api, working with localstorage, mounting and unmounting of pages, it can use for timet or countdown,
  //it take a callback function or arrow function as first argument and an empty dependency array as the second argument.

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(userTodos))
  }, [userTodos])

  useEffect(() => {
      JSON.parse(localStorage.getItem("todos"))
  }, [userTodos])
  // function changeName() {
  //     setUsername("Wajud")
  //     setAge(45)
  // }

  //Declared the function
const handleTodo = (todo) => {
  setUserTodos([...userTodos, todo])
}



console.log(userTodos)
  return (
    <>

      <TodoForm handleTodo={handleTodo} />
      <TodoList userTodos={userTodos} />

      {/* <h1>My username is {username} and I am {age} years old.</h1>
      <button onClick={changeName}>Click me</button> */}
    </>
  )
}

export default App;