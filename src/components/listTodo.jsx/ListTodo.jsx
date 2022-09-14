import React from "react";


const ListTodo = ({ todo, setTodo }) => {

    console.log(todo)

    return (
        <div className="">
            {
                todo.map(item => <div>{item.title}</div>)
            }
        </div>
    )
}

export default ListTodo