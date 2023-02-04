import { useState } from "react";

const ConditionalRendering2 = () =>{
    const [display] = useState(true);
    let output;
    if(display){
        output = (<p>If the Conditiona is true</p>)
    }else{
        output = (<p>If the Conditiona is false</p>)
    }

    return (
            <div>
                <h1>Conditional Rendering (Using Variable)</h1>
                {output}
            </div>
        );
}

export default ConditionalRendering2;