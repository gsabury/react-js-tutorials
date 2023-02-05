import { useState } from "react";

import ListItem from "./ListItem";

const SimpleTodoApp = ()=>{

    const [todo, setTodo] = useState("");

    let [todoList, setTodoList] = useState([]);


    const handleTodo = (event)=>{
        setTodo(event.target.value);
    }

    const handSubmit = (event)=>{
       
        event.preventDefault();

        let tempList = todoList;
        tempList.push(todo);

        setTodoList(tempList);
        
        setTodo("");
    }
   
    return(
        <div>
            <h1>To do Simple App</h1>
            <form onSubmit={handSubmit}>
                <div>
                    <input type="text" value={todo} onChange={handleTodo}></input>
                    <button>Add</button>
                </div>
            </form>
            <ul>{todoList.map((todo, index)=> (
                <ListItem key={index} name={todo} />
            ))}</ul>
        </div>
    );
}

export default SimpleTodoApp;