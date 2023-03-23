import './App.css';
import {Component} from 'react';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchString:''
    }
  }

  onSearchChange = (monster)=>{
    console.log(monster);
    const searchString = monster.target.value.toLowerCase();
    this.setState( ()=>{
      return {searchString}
    })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> this.setState( ()=>{
      return {monsters :users}
    },()=>{
      // console.log(this.state);
    }))
  }
  render(){
  const {monsters,searchString} = this.state;
  const {onSearchChange} = this;
    const filteredMonster = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchString)
    })
    return (
      <div className="App">
        <input className='search-box'
        type='search'
        placeholder='search-monsters'
        onChange={onSearchChange}
        />
        {filteredMonster.map((monster)=>{
          return( <div key = {monster.id}>
            <h1>{monster.name}</h1>
             </div>)
        })}
      </div>
    );
  }
}

export default App;
