
const DestructureProps = (props)=>{
    const {fname, lname, age} = props;
    return (
        <h1>Destructure Props {fname} {lname} {age}</h1>
    );
}

export default DestructureProps;