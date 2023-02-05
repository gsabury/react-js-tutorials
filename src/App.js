import Header from "./components/Header";
import FormElement from "./components/FormElement";
import TodoList from "./components/TotoList";

import { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
        
        <Header/>

        <FormElement todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>

        <TodoList setTodoList={setTodoList} todoList={todoList}/>


    </div>
  );
}

export default App;