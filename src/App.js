import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Todolist from './components/Todolist';
import Post from './components/Post';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/todolist" component={Todolist} />
          <Route path="/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;