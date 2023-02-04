const EventHandling = () =>{
    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={fireAlert}> Click on me!</button>
        </div>
    );
}

const fireAlert = ()=>{
    alert("Alert Fired!")
}


export default EventHandling;