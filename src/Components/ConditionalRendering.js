
import { useState } from "react";

const ConditionalRendering  = () => {
    
    const [display] = useState(false);

    if(display){
        return (
            <div>
                <h1>If the Conditiona is true</h1>
            </div>
        );    
    }else{
        return (
            <div>
                <h1>If the Conditiona is false</h1>
            </div>
        );   
    }
}

export default ConditionalRendering;