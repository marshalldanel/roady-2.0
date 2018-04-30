import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocationField from '../containers/LocationField';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section is-small" />
        <div className="locationsContainer container">
          <h2 className="subtitle has-text-centered is-size-2 has-text-black-bis">Where are you travelling to?</h2>
          <LocationField />
        </div>
      </div>
    );
  }
}

export default Home;
