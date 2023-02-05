import React from "react";

function MemoChild({count}){
    console.log("Child Rendered!");
    return (
        <>
             <p>The Child Cound  Is: {count}</p>
        </>
    );
}

export default React.memo(MemoChild);