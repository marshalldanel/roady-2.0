import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import scriptjs from 'scriptjs';

class LocationField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      startDate: null,
      endDate: null,
      error: null,
      places: false,
    };
  }

  // Fix react-places-autocomplete issue#57 - see PR#107
  componentDidMount() {
    scriptjs('https://maps.googleapis.com/maps/api/js?key=AIzaSyDnTWnxunEDd6nD-pPMdPEY8sZQPZYG-Pc&libraries=places', () => {
      this.setState({
        places: true,
      });
    });
  }

  render() {
    // Break if no Google API
    if (!this.state.places) return null;

    // Autocomplete options
    const searchOptions = {
      types: ['(cities)'],
      componentRestrictions: {
        country: 'us',
      },
    };

    const renderPlaces = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
      <div className="autocomplete-root">
        <input {...getInputProps({
            placeholder: 'Destination...',
            className: 'form-text-field-input',
          })}
        />
        <div className="autocomplete-dropdown-container">
          {suggestions.map((suggestion) => {
            const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
            const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div {...getSuggestionItemProps(suggestion, { className, style })}>
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    );

    return (
      <div className="location-fields">
        <div className="container">{this.state.error} </div>
        <div className="columns">
          <div className="column" />
          <div className="column is-4">
            <div className="field">
              <div className="control">
                {/* Render Cities */}
                <PlacesAutocomplete
                  searchOptions={searchOptions}
                  highlightFirstSuggestion
                  value={this.state.city}
                  onChange={(city) => { this.setState({ city }); }}
                >
                  {renderPlaces}
                </PlacesAutocomplete>
              </div>
            </div>
          </div>
          <div className="column">
            {/* Render Dates */}
            <DateRangePicker
              startDateId="StartDate"
              endDateId="EndDate"
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }, console.log(startDate, endDate)); }}
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
              showDefaultInputIcon
              required
              startDatePlaceholderText="Arriving"
              endDatePlaceholderText="Departing"
            />
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

export default LocationField;
