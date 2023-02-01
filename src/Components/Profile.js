const Profile = (props) =>{

    return (
        <h1>
            Name: {props.fname} {props.lname} {props.age}
            {props.children}
        </h1>
    );
}

export default Profile;