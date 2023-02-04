const Profile = (props) =>{

    return (
        <div>
            <h1>Using Props: </h1>
            <p>
                Name: {props.fname} {props.lname} {props.age}
                {props.children}
            </p>
        </div>
    );
}

export default Profile;