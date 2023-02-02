const EventHandling = () =>{
    return (
        <div>
            <button onClick={fireAlert}> Click on me!</button>
        </div>
    );
}

const fireAlert = ()=>{
    alert("Alert Fired!")
}


export default EventHandling;