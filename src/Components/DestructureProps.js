import { Component } from "react";

class DestructureProps extends Component{
    render = ()=>{
        const {fname, lname, age} = this.props;
        return (
            <div>
                <h1>Destructure Props: </h1>
                <p>{fname} {lname} {age}</p>
            </div>
        );
    }
}
export default DestructureProps;