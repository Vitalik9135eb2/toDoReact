import React, { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import Header from "./components/headerTodo/Header";
import ListTodo from "./components/listTodo.jsx/ListTodo";

const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First todo",
      status: true,
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
    <div className="App">
      <Header/>
      <AddTodo/>
      <ListTodo todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
