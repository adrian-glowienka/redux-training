import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;