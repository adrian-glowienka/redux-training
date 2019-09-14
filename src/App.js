import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {id:1, content: 'buy milk'},
      {id:1, content: 'go to work'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }

}

export default App;
