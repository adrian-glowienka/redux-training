import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {id:1, content: 'buy milk'},
      {id:2, content: 'go to work'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }

}

export default App;
