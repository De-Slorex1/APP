import { useState } from "react"

function TodoForm({ handleStoringOfData }) {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Personal")
    const [priority, setPriority] = useState("Low")
    const [deadLine, setDeadLine] = useState("")
    console.log(title)
    console.log(category)
    console.log(priority)
    console.log(deadLine)

    function handleSubmit(e) {
        e.preventDefault()
        //Invoke the function here
        const todoObject = {
            id: Date.now(),
            title,
            category,
            priority,
            deadLine,
            status: false 
        }
        handleStoringOfData(todoObject)

        setTitle("")
        setDeadLine("")
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title}  placeholder="What's your plan ?" onChange={(e) => setTitle(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Personal</option>
                <option>School</option>
                <option>Work</option>
                <option>Business</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <input type="date" value={deadLine} onChange={(e) => setDeadLine(e.target.value)}/>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm
