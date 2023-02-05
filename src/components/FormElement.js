import styles from '../Styles.module.css';

import { nanoid } from 'nanoid';

const FormElement = ({todo, setTodo, todoList, setTodoList})=>{
 
    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name:todo, id:nanoid()}]);
        setTodo("");
    }
    
    return (
            <div className={styles.todoform}>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={todo}
                        onChange={handleChange}
                        className={styles.todoinput} 
                        type="text" 
                        placeholder="Add Item"/>
                    
                    <button 
                        className={styles.todobutton} 
                        type="submit">Add</button>
                </form>
            </div>
        );
        
}

export default FormElement;