import React from "react";
import { useState } from "react";
import s from "./_listTodo.module.scss";

import trashImg from "./../../img/delete.svg";
import editImg from "./../../img/edit.svg";
import doneImg from "./../../img/icon_check_24.svg";


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

    const saveTodo = (id) => {

        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }

            return item
        })

        setTodo(newTodo)
        setEdit(null)
    }
    
    return (
        <ul className={s.list}>
            {
                todo.map(item => (

                    
                    <li key={item.id} className={!item.status ? s.item : `${s.item}  ${s.itemDone}`}>

                        {
                            edit == item.id
                                ? <div className={s.textWrap}>
                                    <input className={s.todoTextInput}
                                        type="text"
                                        onChange={e => setValue(e.target.value)}
                                        value={value}
                                        autoFocus
                                    />
                                </div>
                                :
                                <div className={s.textWrap}>
                                    <p className={s.todoText}>{item.title}</p>
                                </div>
                        }


                        {
                            edit == item.id
                                ? <button onClick={() => saveTodo(item.id)}>Save</button>

                                : <div className={s.wrapBtn}>
                                    <button className={ !item.status ? `${s.btn} ${s.btnEdit}` : s.none} onClick={() => editTodo(item.id, item.title)}>
                                        <img src={editImg} alt="edit" />
                                    </button>

                                    <button className={`${s.btn} ${s.btnRed}`} onClick={() => deleteTodo(item.id)}>
                                        <img src={trashImg} alt="delete" />
                                    </button>

                                    <button className={!item.status ? `${s.btn} ${s.btnDone}` : s.none} onClick={() => statusTodo(item.id)}>
                                        <img src={doneImg} alt="done" />
                                    </button>
                                </div>
                        }

                        


                    </li>
                    

                ))
            }
        </ul>
    )
}

export default ListTodo