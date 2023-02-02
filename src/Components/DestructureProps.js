import { Component } from "react";

class DestructureProps extends Component{
    render = ()=>{
        const {fname, lname, age} = this.props;
        return (
            <h1>Destructure Props {fname} {lname} {age}</h1>
        );
    }
}
export default DestructureProps;