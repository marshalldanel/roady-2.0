import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super();
  }

  render() {
    let isButton;
    const { view, updateView } = this.props;

    if (view === 'locations') {
      isButton = (
        <button className="button is-primary is-centred fixed-width-100" onClick={() => { updateView('genres'); }}>
          <span>Select Genres</span>
        </button>);
    } else if (view === 'genres') {
      isButton = (
        <button className="button is-primary is-centred fixed-width-100" onClick={() => { updateView('itinerary'); }}>
          <span>See your trip!</span>
        </button>);
    } else {
      isButton = <div />;
    }

    return (
      <div className="section">
        <div className="columns">
          <div className="column" />
          <div className=" column is-2">
            {isButton}
          </div>
          <div className="column" />
        </div>
      </div>
    );
  }
}

export default (Button);
