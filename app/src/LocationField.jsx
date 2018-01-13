import React, { Component } from 'react';

class LocationField extends Component {
  render() {
    return (
      <div className="location-fields">
        <div className="columns">
          <div className="column" />
          <div className="column is-4">
            <div className="field">
              <div className="control">
                {/* Render Cities */}
              </div>
            </div>
          </div>
          <div className="column">
            {/* Render Dates */}
          </div>
          <div className="column">
            {/* Render +/- Buttons */}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationField;
