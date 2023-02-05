import styles from '../Styles.module.css';
const Todo = ({todoItem, todoList, setTodoList}) =>{
    const handleDone = ()=>{
        setTodoList(todoList.filter((item)=>item.id !==todoItem.id));
    }
    return(
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoname}>{todoItem.name}</h3>
                <button className={styles.tododelete} onClick={handleDone}>Done</button>
            </div>
        </div>
    );
}

export default Todo;