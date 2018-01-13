import React, { Component } from 'react';
import LocationField from './LocationField.jsx';

class LocationList extends Component {
  render() {
    return (
      <div className="locationsContainer container">
        <h2 className="subtitle has-text-centered is-size-2 has-text-black-bis">Where are you travelling to?</h2>
        <LocationField />
      </div>
    );
  }
}

export default LocationList;
