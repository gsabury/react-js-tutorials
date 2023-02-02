import { Component } from "react";

class EventHandling extends Component{
    render = ()=>{
        return (
            <div>
                <button onClick={this.fireEvent}> Click on me!</button>
            </div>
        );
    }

    fireEvent = ()=>{
        alert("The event is fired!");
    }
}

export default EventHandling;