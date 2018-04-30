import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import GenreSelect from './GenreSelect';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <NavBar />
          <Route path="/" component={Home} />
          <Route exact path="/genres" component={GenreSelect} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
