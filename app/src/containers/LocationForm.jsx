import React, { Component } from 'react';
import moment from 'moment';
import { Field, Fields, FieldArray, reduxForm } from 'redux-form';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRangePickerWrapper from './DateRangePickerWrapper';
import PlacesAutocompleteWrapper from './PlacesAutocompleteWrapper';

class LocationForm extends Component {
  renderCities = (fields) => {
    const options = {
      types: ['(cities)'],
      country: ['us', 'ca'],
    };
    const cssClasses = {
      input: 'form-text-field input',
    };
    const inputprops = {
      value: '', // Req to work
      onChange: city => console.log(city),
      placeholder: 'Destination...',
    };
    const myStyles = {
      autocompleteContainer: { zIndex: 2 },
    };
    return (
      <PlacesAutocompleteWrapper
        {...fields}
        cssClasses={cssClasses}
        options={options}
        inputprops={inputprops}
        myStyles={myStyles}
      />
    );
  };
  
  formatDates = (value, name) => moment(value);
  parseDates = (value, name) => value.format('YYYYMMDD');
  renderDates = (fields, props) => (
    <DateRangePickerWrapper
      {...fields}
      {...props}
    />
  );
  
  renderFields = ({ fields, meta: { error, submitFailed, submitting, pristine } }) => (
    <div>
      {submitFailed && error && <div>{error}</div>}
      {fields.map((location, index) => (
        <div key={index}>
          <div className="columns">
            <div className="column" />
            <div className="column is-4">
              <div className="field">
                <div className="control">
                  <Field
                    component={this.renderCities}
                    placeholder="Destination"
                    label="city"
                    name={`${location}.city`}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <Fields
                index={index}
                names={[`${location}.start`, `${location}.end`]}
                component={this.renderDates}
                parse={this.parseDates}
                format={this.formatDates}
              />
              <div className="column" />
            </div>
            <button className="button is-primary is-outlined has-text-centered locationButtons" disabled={submitting || pristine || error} onClick={() => fields.push({ city: '', start: moment().format('YYYYMMDD'), end: moment().format('YYYYMMDD')})}>
              <div className="icon">
                <i className="fa fa-plus" />
              </div>
            </button>
            <button className="button is-primary is-outlined has-text-centered locationButtons" disabled={submitting || pristine || error || index < 1 } onClick={() => { fields.remove(index); console.log(location[index], location[index].length) }}>
              <div className="icon">
                <i className="fa fa-minus" />
              </div>
            </button>
          </div>
        </div>
     ))}
    </div>
  );
  
  componentDidMount() {
    this.initilizeForm();
  }
  initilizeForm() {
    const values = [{ city: '', start: moment().format('YYYYMMDD'), end: moment().format('YYYYMMDD') }];
    this.props.initialize({ locations: values });
  }

  mySubmit(e) {
    console.log('This does nothing');
    e.preventDefault();
  }

  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    
    return (
      <div className="locationsContainer container">
        <h2 className="subtitle has-text-centered is-size-2 has-text-black-bis">Where are you traveling to?</h2>
        <div className="location-fields">
          <form onSubmit={handleSubmit(this.mySubmit)}>
            <FieldArray name="locations" component={this.renderFields} />
          </form>
        </div>
      </div>
    );
  }
}

LocationForm = reduxForm({
  form: 'LocationForm',
  destroyOnUnmount: false,
  // validate,
})(LocationForm);

export default LocationForm;
