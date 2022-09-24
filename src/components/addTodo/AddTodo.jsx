import React from "react";
import { useState } from "react";


const AddTodo = ({ todo, setTodo }) => {

    const [value, setValue] = useState("")

    const saveTodo = () => {
        setTodo(
            [...todo, {
                id: todo.length + 1,
                title: value,
                status: false
            }]
        )

        setValue("")

    }

    return (
        <div className="">
            <input type="text" placeholder="Add task" value={value} onChange={e => setValue(e.target.value)} /> 
            <button onClick={saveTodo} >Save</button>
        </div>
    )
}

export default AddTodo