import { useState } from "react";

import MemoChild from "./MemoChild";

export default function MemoParent(){

    const [parentCount, setParentCound] = useState(0);

    const [childCound, setChildCount] = useState(0);
    
    const increaseParentCount = ()=>{
        setParentCound(parentCount+1);
    }
    
    const increaseChildCount = ()=>{
        setChildCount(childCound+1);
    }
    
    return (
        <>
            <h1>Using Memo to prevent child component rerending</h1>
            <p>The parent cound is: {parentCount}</p>
            <MemoChild count={childCound}/>
            <button onClick={increaseParentCount}>Increase Parent Cound</button>
            <button onClick={increaseChildCount}>Increase Child Cound</button>
        </>
    );
}