import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationField from './LocationField.jsx';

class LocationList extends Component {
  render() {
    // Passes in empty location data to render form input fields
    const locations = this.props.locations.map((location, index) => (
      <LocationField
        key={index}
        index={index}
        city={location.city}
        start_date={location.start_date}
        end_date={location.end_date}
      />));
    return (
      <div className="locationsContainer container">
        <h2 className="subtitle has-text-centered is-size-2 has-text-black-bis">Where are you traveling to?</h2>
        {locations}
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = state => ({
  locations: state.locations,
});

export default connect(mapStateToProps, null)(LocationList);
