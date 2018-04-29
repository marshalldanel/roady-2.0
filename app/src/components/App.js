import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
