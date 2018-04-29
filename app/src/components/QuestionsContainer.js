import React, { Component } from 'react';
import LocationList from './LocationList';
import GenreSelect from './GenreSelect';

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
