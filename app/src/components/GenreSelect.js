import React, { Component } from 'react';

class GenreSelect extends Component {
  render() {
    const genres = [];

    const genreTypes = [
      {
        genre: 'rock',
        icon: 'fa fa-hand-rock-o',
      },
      {
        genre: 'pop',
        icon: 'fa fa-thumbs-o-up',
      },
      {
        genre: 'hip-hop',
        icon: 'fa fa-music',
      },
      {
        genre: 'indie',
        icon: 'fa fa-motorcycle',
      },
      {
        genre: 'world',
        icon: 'fa fa-globe',
      },
      {
        genre: 'electronic',
        icon: 'fa fa-bolt',
      },
      {
        genre: 'classical',
        icon: 'fa fa-ticket',
      },
      {
        genre: 'country',
        icon: 'fa fa-star',
      },
      {
        genre: 'folk',
        icon: 'fa fa-microphone',
      },
      {
        genre: 'latin',
        icon: 'fa fa-thermometer-full',
      },
      {
        genre: 'r&b',
        icon: 'fa fa-heart',
      },
      {
        genre: 'metal',
        icon: 'fa fa-trash',
      },
    ];

    // Sorts Genres
    genreTypes.sort((a, b) => {
      if (a.genre < b.genre) return -1;
      if (a.genre > b.genre) return 1;
      return 0;
    });

    // Maps genres, onClick toggle state and render as 'active'
    const genreSelector = genreTypes.map((item, index) => {
      let buttonClass = 'button is-primary fixed-width-100';
      if (genres.indexOf(item.genre) > -1) {
        buttonClass += ' is-active';
      }
      return (
        <div key={index} className="column is-one-quarter is-capitalized">
          {/* eslint-disable jsx-a11y/interactive-supports-focus */}
          <div
            className={buttonClass}
            role="button"
            onClick={() => {
              // Update state
              console.log('hi');
            }}
          >
            {/* eslint-enable */}
            <span className="icon is-small">
              <i className={item.icon} />
            </span>
            <span>{item.genre}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="container animated bounceInRight">
        <h2 className="subtitle has-text-centered is-size-2 has-text-black-bis">Select your favorite genres</h2>
        <div className="columns">
          <div className="column is-2" />
          <div className="column is-8">
            <div className="columns is-multiline">
              {genreSelector}
            </div>
          </div>
          <div className="column is-2" />
        </div>
      </div>
    );
  }
}

export default GenreSelect;
