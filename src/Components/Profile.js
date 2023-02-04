import { Component } from "react";

class Profile extends Component {
    render = ()=>{
        return (
                <div>
                    <h1>Using Props: </h1>
                    <p>User Information: {this.props.fname} {this.props.lname} {this.props.age}</p>
                </div>
            )
    }
}

export default Profile;