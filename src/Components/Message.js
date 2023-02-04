import { Component } from "react";

class Message extends Component{

    // Traditional Syntax
    /*
    render(){
        return (
            <h1>Message from class component</h1>
        );
    }
    */
    // ES6 Syntax
    render = ()=>{
        return (
            <div>
                <h1>Simple Example</h1>
                <p>Message from class component</p>
            </div>
        );
    }
}
export default Message;