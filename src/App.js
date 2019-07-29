import React, { Component } from 'react';
import Todos from './components/Todo';

import './App.css';

class App extends Component{

  state = {
    todos: [
      {
        id: 1,
        title: 'Study Functional Analysis',
        completed: false
      },
      {
        id: 2,
        title: 'Do some workout',
        completed: false
      },
      {
        id: 3,
        title: 'Call my wife',
        completed: false
      }
    ]
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
