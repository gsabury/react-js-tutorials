import { useState } from "react";

const ConditionalRendering2 = () =>{

    const [display] = useState(false);
    let output;
    
    output = display ? 
        output =  
        (<div>
                        <h1>If the Conditiona is true</h1>
                    </div>
    )
    :(
        <div>
            <h1>If the Conditiona is false</h1>
        </div>
    )
    
    return output;
}

export default ConditionalRendering2;