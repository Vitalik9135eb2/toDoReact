import React from "react";
import AddTodo from "./components/addTodo/AddTodo";
import Header from "./components/headerTodo/Header";
import ListTodo from "./components/listTodo.jsx/ListTodo";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <AddTodo/>
      <ListTodo/>
    </div>
  );
}

export default App;
