import { Component } from "react";

class Form extends Component{
    
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
        }
    }
    
    handleFirstName = (event)=>{
        this.setState({
            firstName: event.target.value,
        });
    }

    handleLastName = (event)=>{
        this.setState({
            lastName: event.target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log({ firstName: this.state.firstName, lastName: this.state.lastName });
    }

    render = ()=>{
        return (
                <div>
                    <h1>Form Handeling</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleFirstName} value={this.state.firstName} />
                        <br/>
                        <input type="text" onChange={this.handleLastName} value={this.state.lastName} />
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                );
    }
}

export default Form;