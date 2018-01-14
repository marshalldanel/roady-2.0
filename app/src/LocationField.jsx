import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class LocationField extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      startDate: null,
      endDate: null,
      error: null,
    };
  }

  render() {
    // Autocomplete options
    const options = {
      types: ['(cities'],
    };
    const inputProps = {
      value: this.state.city, // Req to work
      onChange: city => this.setState({ city }),
      placeholder: 'Destination...',
    };
    const myStyles = {
      autocompleteContainer: { zIndex: 2 },
    };
    const cssClasses = {
      input: 'form-text-field-input',
    };

    // Add in buttons cond render
    const buttons = (
      <div>
        <button className="button is-primary is-outlined has-text-centered locationsButtons">
          <div className="icon">
            <i className="fa fa-plus" />
          </div>
        </button>
        <button className="button is-primary is-outlined has-text-centered locationsButtons">
          <div className="icon">
            <i className="fa fa-minus" />
          </div>
        </button>
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
                  inputProps={inputProps}
                  options={options}
                  googleLogo={false}
                  styles={myStyles}
                  highlightFirstSuggestion
                  classNames={cssClasses}
                />
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
              showDefaultInputIcon // Shows calendar icon
              required // Is required
              startDatePlaceholderText="Arriving" // Placeholder text
              endDatePlaceholderText="Departing"
            />
          </div>
          <div className="column">
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationField;
