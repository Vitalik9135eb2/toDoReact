import React from "react";
import s from "./_listTodo.module.scss" 


const ListTodo = ({ todo, setTodo }) => {

    const deleteTodo = (id) => {
        console.log("xyi" + id)
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }

    const statusTodo = (id) => {
        console.log("status")
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)

        console.log(todo)
    }

    const editTodo = (id) => {

    }

    return (
        <div className="">
            {
                todo.map(item => (
                    
                <div key={item.id} className={s.wrap}>
                    <div>{item.title}</div>
                    <button onClick={() => deleteTodo(item.id)}></button>
                    <button onClick={() => statusTodo(item.id)}></button>
                    <button onClick={() => editTodo(item.id)}></button>
                </div>
                
                ))
            }
        </div>
    )
}

export default ListTodo