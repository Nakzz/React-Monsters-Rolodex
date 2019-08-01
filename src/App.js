import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from '../src/component/card-list/card-list-component'
import {SearchBox} from '../src/component/searchBox/searchBox-component'

class App extends Component {

constructor(){
  super();
  this.state = {
    monsters: [],
    searchField: ""
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()
  .then(users =>{
    console.log(users)
    this.setState({monsters : users})
  })
  )
}

handleSearchState =(e) =>{
  let field = e.target.value
  this.setState({searchField:field})
}

  render(){
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox  placeholder="Search Monsters" handleChange={this.handleSearchState}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
