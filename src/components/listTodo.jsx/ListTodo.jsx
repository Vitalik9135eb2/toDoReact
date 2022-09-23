import React from "react";


const ListTodo = ({ todo, setTodo }) => {

    const deleteTodo = (id) => {
        console.log("xyi" + id)
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)

    }


    const statusTodo = (id) => {
        console.log("status")
    }
    
    return (
        <div className="">
            {
                todo.map(item => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <button onClick={() => deleteTodo(item.id)}></button>
                    <button onClick={() => statusTodo(item.id)}></button>

                </div>
                
                ))
            }
        </div>
    )
}

export default ListTodo