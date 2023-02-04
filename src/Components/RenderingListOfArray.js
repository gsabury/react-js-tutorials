
const RenderingListOfArray  = () =>{
 
    const people = [ "Ghafor",  "Mahmood", "Jumah", "Razia"];

    let peopleList = people.map((person, index)=> (
        <p key={index}>{person}</p>
    ));

    return (
        <div>
            <h1>Rendering List of Array : </h1>
            {peopleList}
        </div>
        );

}

export default RenderingListOfArray;