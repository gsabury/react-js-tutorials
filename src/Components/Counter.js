
import { useState } from "react";



const Counter = ()=>{
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter +1);
    }
    
    const decrement = () =>{
        setCounter(counter - 1);
    }
    
    return (
        <div>
            <h1>The Counter: {counter}</h1>
            <button onClick={increment}>Increment Counter</button>  
            <br/>
            <button onClick={decrement}>Decrement Counter</button>  
        </div>
        );
}
export default Counter;