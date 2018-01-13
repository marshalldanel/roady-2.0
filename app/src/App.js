import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';

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
