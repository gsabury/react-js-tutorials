const style = {
    color:"red",
    textAlign:"Center",
    fontSize: "18px",
}
export default function InlineStyleComponent(){
    return (
        <div>
            <h1>How to use Inline Style</h1> 
            <p style={style}>Inline style applied here</p>
        </div>
    );
}