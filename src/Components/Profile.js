import { Component } from "react";

class Profile extends Component {
    render = ()=>{
        return <h1>User Information: {this.props.fname} {this.props.lname} {this.props.age}</h1>
    }
}

export default Profile;