import React, { Component } from 'react';
import LocationList from '../containers/LocationList.jsx';
import GenreSelect from '../containers/GenreSelect.jsx';

class QuestionBox extends Component {
  render() {
    const { view } = this.props;

    let currentView;
    switch (view) {
      case 'locations':
        currentView = <LocationList />;
        break;
      case 'genres':
        currentView = <GenreSelect />;
        break;
      default:
        currentView = <LocationList />;
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
