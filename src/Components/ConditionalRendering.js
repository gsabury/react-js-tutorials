
import { useState } from "react";

const ConditionalRendering  = () => {
    
    const [display] = useState(false);

    if(display){
        return (
            <div>
                <h1>Conditional Rendering (Using Normal Method)</h1>
                <p>If the Conditiona is true</p>
            </div>
        );    
    }else{
        return (
            <div>
                <h1>Conditional Rendering (Using Normal Method)</h1>
                <p>If the Conditiona is false</p>
            </div>
        );   
    }
}

export default ConditionalRendering;