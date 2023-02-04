import { useState } from "react";

const ConditionalRendering2 = () =>{

    const [display] = useState(false);
    let output;
    
    output = display ?  (
            <p>If the Conditiona is true</p>
        )
    :(
        <p>If the Conditiona is false</p>
    )
    
    return (
        <div>
            <h1>Conditional Rendering (Using Ternary Operator)</h1>
            {output}
        </div>
    );
}

export default ConditionalRendering2;