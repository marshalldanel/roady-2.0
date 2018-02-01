import React, { Component } from 'react';
import LocationForm from '../containers/LocationForm.jsx';
import GenreSelect from '../containers/GenreSelect.jsx';

class QuestionBox extends Component {
  render() {
    const { view } = this.props;

    let currentView;
    switch (view) {
      case 'locations':
        currentView = <LocationForm />;
        break;
      case 'genres':
        currentView = <GenreSelect />;
        break;
      default:
        currentView = <LocationForm />;
        break;
    }

    return (
      <div>
        {currentView}
      </div>
    );
  }
}

export default QuestionBox;
