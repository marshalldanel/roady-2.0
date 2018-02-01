import React, { Component } from 'react';
import scriptjs from 'scriptjs';
import PlacesAutocomplete from 'react-places-autocomplete';

class PlacesAutocompleteWrapper extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      places: false,
    };
  }

  // Fix react-places-autocomplete issue#57 - see PR#107
  componentDidMount() {
    scriptjs('https://maps.googleapis.com/maps/api/js?key=AIzaSyBdNLXiqz6-XZjTevwazWp3zgSXeExgDKI&libraries=places', () => {
      this.setState({
        places: true,
      });
    });
  }

  render() {
    const {
      input, inputprops, options, myStyles, cssClasses,
    } = this.props;

    // Break if no Google API - Change to error page later
    if (!this.state.places) return null;

    return (
      <PlacesAutocomplete
        inputProps={{ inputprops, ...input }}
        options={options}
        googleLogo={false}
        styles={myStyles}
        highlightFirstSuggestion
        className={cssClasses}
      />
    );
  }
}

export default PlacesAutocompleteWrapper;
