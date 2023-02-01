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
            <h1>Message from class component</h1>
        );
    }
}
export default Message;