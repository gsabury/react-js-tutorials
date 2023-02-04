
const RenderingListOfObjects  = () =>{
 
    const people = [
        {id:1, firstname : "Ghafor", lastname: "Sabury"},
        {id:2, firstname : "Mahmood", lastname: "Sabeghi"},
        {id:3, firstname : "Jumah", lastname: "Mohammadi"},
        {id:4, firstname : "Hamid", lastname: "Karimi"},
      ];

    let peopleList = people.map((person)=> (
        <p key={person.id}>{person.firstname} {person.lastname}</p>
    ));

    return (
        <div>
            <h1>Rendering List of Object : </h1>
            {peopleList}
        </div>
        );
}

export default RenderingListOfObjects;