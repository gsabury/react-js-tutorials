import Todo from "./Todo";

const TodoList = ({todoList, setTodoList})=>{

    return (
        <div>
            {todoList.map((todoItem) =>(
                <Todo key={todoItem.id} todoItem={todoItem} setTodoList={setTodoList} todoList={todoList}></Todo>
            ))}
        </div>
    );
}

export default TodoList;