

import { Component } from "react";

class App extends Component{

  constructor(){
    super();
    this.state = {
            monsters: [
                  {id:1, name:"Ghafor"},
                  {id:2, name:"Mahmood"},
                  {id:3, name:"Jumah"},
                  {id:4, name:"Hussain"},
                  {id:5, name:"Mahdi"},
            ],
            searchField:"",
    }
  }

  componentDidMount(){
      // fetch("https://jsonplaceholder.typicode.com/users")
      // .then(response => response.json())
      // .then(users => 
      //   this.setState(()=>{
      //     return {monsters: users}
      //   }, ()=>{
      //     // console.log(this.state.monsters)
      //   })
      // )
  }

  // handleInput = (event)=>{

      
  // }


  render = () => {
    
    const filteredMonsters = this.state.monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
            <input 
              className="search-box"
              type="search" 
              placeholder="Search Monsters" 
              onChange={(event)=>{

              const searchField = event.target.value.toLocaleLowerCase();

              this.setState(()=>{
                  return {searchField}
              })
              
            }} />
            {
              filteredMonsters.map((monster)=>{
                return <h1 key={monster.id}>{monster.name}</h1>
              })
            }
        
      </div>
    );
  }

}

export default App;
