
const DestructureProps = (props)=>{
    const {fname, lname, age} = props;
    return (
        <div>
            <h1>Destructure Props: </h1>
            <p>{fname} {lname} {age}</p>
        </div>
    );
}

export default DestructureProps;