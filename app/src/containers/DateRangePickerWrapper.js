import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';
import structure from "redux-form/lib/structure/plain";

class DateRangePickerWrapper extends Component {
  // See -> https://github.com/erikras/redux-form/issues/1860
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }

  handleDatesChange = dates => {
    const { start } = this.props.locations[this.props.index];
    const { end } = this.props.locations[this.props.index];
    start.input.onChange(dates.startDate);
    end.input.onChange(dates.endDate);
  }

  handleFocusChange = focusedInput => {
    this.setState({ focusedInput });
    if (focusedInput === START_DATE) {
      this.props.locations[this.props.index].start.input.onFocus();
      return;
    }
    if (focusedInput === END_DATE) {
      this.props.locations[this.props.index].end.input.onFocus();
      return;
    }
  };

  render() {
    const endDate = this.props.locations[this.props.index].end.input.value;
    const startDate = this.props.locations[this.props.index].start.input.value;
    return (
      <div>
        <DateRangePicker
          endDate={endDate}
          endDateId="EndDate"
          endDatePlaceholderText="Departing"
          focusedInput={this.state.focusedInput || null}
          onDatesChange={this.handleDatesChange}
          onFocusChange={this.handleFocusChange}
          showDefaultInputIcon
          startDate={startDate}
          startDateId="StartDate"
          startDatePlaceholderText="Arriving"
        />
      </div>
    );
  }
}

export default DateRangePickerWrapper;
