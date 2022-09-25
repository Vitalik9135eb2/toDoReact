import React, { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import Header from "./components/headerTodo/Header";
import ListTodo from "./components/listTodo.jsx/ListTodo";
import s from "./_app.module.scss"

const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First todo",
      status: false,
    },

    {
      id: 2,
      title: "Second todo",
      status: true,
    },

    {
      id: 3,
      title: "Third todo",
      status: false,
    },

  
  ]);

  return (
    <div className={s.wrap}>
        <div className={s.inner}>
          <Header/>
          <AddTodo todo={todo} setTodo={setTodo} />
          <ListTodo todo={todo} setTodo={setTodo}/>
        </div>      
    </div>
  );
}

export default App;
