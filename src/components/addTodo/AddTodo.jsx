import React from "react";
import { useState } from "react";
import s from "./addTodo.module.scss"


const AddTodo = ({ todo, setTodo }) => {

    const [value, setValue] = useState("")

    const saveTodo = () => {
        if(value.length > 1){
            setTodo(
                [...todo, {
                    id: todo.length + Math.random,
                    title: value,
                    status: false
                }]
            )
    
            setValue("")
        }
        

    }

    return (
        <div className={s.wrap}>
            <input className={s.input} type="text" placeholder="Add task" value={value} onChange={e => setValue(e.target.value)} /> 
            <button className={s.btn} onClick={saveTodo} >Save</button>
        </div>
    )
}

export default AddTodo