import React, { Component } from 'react';
import LocationList from './LocationList.jsx';
import GenreSelect from './GenreSelect.jsx';

class QuestionsContainer extends Component {
  render() {
    return (
      <div>
        <LocationList />
        <GenreSelect />
      </div>
    );
  }
}

export default QuestionsContainer;
