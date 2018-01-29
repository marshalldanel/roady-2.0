import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import scriptjs from 'scriptjs';
import { setCity, setDates, addLocation, removeLocation } from '../store/actions';

class LocationField extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      startDate: null,
      endDate: null,
      error: null,
      places: false,
    };

    // this.updateCity = this.updateCity.bind(this);
  }

  // Fix react-places-autocomplete issue#57 - see PR#107
  componentDidMount() {
    scriptjs('https://maps.googleapis.com/maps/api/js?key=AIzaSyBdNLXiqz6-XZjTevwazWp3zgSXeExgDKI&libraries=places', () => {
      this.setState({
        places: true,
      });
    });
  }

  updateCity() {
    this.props.setCity(this.props.index, this.state.city);
  }

  render() {
    const {
      setDates, setCity, addLocation, locations, index,
    } = this.props;

    // Break if no Google API
    if (!this.state.places) return null;

    // Autocomplete options
    const options = {
      types: ['(cities)'],
      country: ['us', 'ca'],
    };
    const inputProps = {
      value: this.state.city, // Req to work
      onChange: city => this.setState({ city }, this.updateCity()),
      placeholder: 'Destination...',
    };
    const myStyles = {
      autocompleteContainer: { zIndex: 2 },
    };
    const cssClasses = {
      input: 'form-text-field-input',
    };

    // Conditionally render add/remove location buttons
    let buttons = null;
    let buttonsDisabled = false;
    if (locations[index].city === '') {
      buttonsDisabled = true;
    }
    if (this.props.index === (locations.length) - 1) {
      buttons = (
        <div>
          <button className="button is-primary is-outlined has-text-centered locationButtons" disabled={buttonsDisabled} onClick={() => { addLocation(locations, index); }}>
            <div className="icon">
              <i className="fa fa-plus" />
            </div>
          </button>
          <button className="button is-primary is-outlined has-text-centered locationButtons" onClick={() => { console.log('removeeeeeeeeeeee'); }}>
            <div className="icon">
              <i className="fa fa-minus" />
            </div>
          </button>
        </div>
      );
    }


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
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate }, () => setDates(this.props.index, moment(this.state.startDate).format('YYYYMMDD'), moment(this.state.endDate).format('YYYYMMDD')))}
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
              showDefaultInputIcon
              required
              startDatePlaceholderText="Arriving"
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

const mapStateToProps = state => ({
  locations: state.locations,
});

const mapDispatchToProps = dispatch => ({
  setCity: (index, city) => dispatch(setCity(index, city)),
  setDates: (index, startDate, endDate) => dispatch(setDates(index, startDate, endDate)),
  removeLocation: index => dispatch(removeLocation(index)),
  addLocation: index => dispatch(addLocation(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationField);
