import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state= {
    user: [
    {name: 'shubhangi', gender: 'girl'},
    {name: 'Manu', gender: 'boy'},
    ]
  }
  render() {
    return (
        <div className="App">
        <UserInput/>
        <button> Show text</button>
         <h3>Output Text</h3>
        <UserOutput name= {this.state.user[0].name} gender= {this.state.user[0].gender}/>
         <UserOutput name= {this.state.user[1].name} gender= {this.state.user[1].gender}/>
        </div>
      );
  }

}

export default App;
