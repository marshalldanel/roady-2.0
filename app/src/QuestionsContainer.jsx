import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGenre, removeGenre } from './store/actions';
import LocationList from './LocationList.jsx';
import GenreSelect from './GenreSelect.jsx';

class QuestionsContainer extends Component {
  render() {
    const {
      view, locations, genres, addGenre, removeGenre,
    } = this.props;

    let currentView;
    switch (view) {
      case 'locations':
        currentView = <LocationList locations={locations} />;
        break;
      case 'genres':
        currentView = <GenreSelect genres={genres} addGenre={addGenre} removeGenre={removeGenre} />;
        break;
      default:
        currentView = <LocationList locations={locations} />;
        break;
    }

    return (
      <div>
        {currentView}
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = state => ({
  genres: state.genres,
  locations: state.locations,
});

// Maps actions to props
const mapDispatchToProps = dispatch => ({
  addGenre: genre => dispatch(addGenre(genre)),
  removeGenre: genre => dispatch(removeGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
