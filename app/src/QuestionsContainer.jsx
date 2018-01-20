import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGenre, removeGenre } from './store/actions';
import LocationList from './LocationList.jsx';
import GenreSelect from './GenreSelect.jsx';

class QuestionsContainer extends Component {
  render() {
    const { genres, addGenre, removeGenre } = this.props;
    return (
      <div>
        <LocationList />
        <GenreSelect
          genres={genres}
          addGenre={addGenre}
          removeGenre={removeGenre}
        />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = state => ({
  genres: state.genres,
});

// Maps actions to props
const mapDispatchToProps = dispatch => ({
  addGenre: genre => dispatch(addGenre(genre)),
  removeGenre: genre => dispatch(removeGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
