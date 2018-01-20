import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Home view={this.props.view} />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = state => ({
  view: state.view,
});

export default connect(mapStateToProps)(App);
