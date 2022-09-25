import React from "react";
import { useState } from "react";
import s from "./_listTodo.module.scss"


const ListTodo = ({ todo, setTodo }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState("")

    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }

    const statusTodo = (id) => {
        console.log("status")
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)

        console.log(todo)
    }

    const editTodo = (id, value) => {
        setEdit(id)
        setValue(value)
    }

    const saveTodo = (id) =>{
        
        let newTodo = [...todo].map(item => {
            if(item.id == id){
                item.title = value
            }

            return item
        })

        setTodo(newTodo)
        setEdit(null)
    }


    return (
        <div className="">
            {
                todo.map(item => (

                    <div key={item.id} className={s.wrap}>

                        {
                            edit == item.id
                                ? <div>
                                    <input type="text" onChange={e => setValue(e.target.value)} value={value} />
                                </div>
                                :
                                <div>{item.title}</div>
                        }

                        {
                            edit == item.id
                                ? <button onClick={() => saveTodo(item.id)}>Save</button>

                                : <div>
                                    <button onClick={() => deleteTodo(item.id)}></button>
                                    <button onClick={() => statusTodo(item.id)}></button>
                                    <button onClick={() => editTodo(item.id, item.title)}></button>
                                </div>
                        }


                    </div>

                ))
            }
        </div>
    )
}

export default ListTodo