import { Component } from "react";

class EventHandling extends Component{
    render = ()=>{
        return (
            <div>
                <h1>Event Handling: </h1>
                <button onClick={this.fireEvent}> Click on me!</button>
            </div>
        );
    }

    fireEvent = ()=>{
        alert("The event is fired!");
    }
}

export default EventHandling;