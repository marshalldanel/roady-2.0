import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section is-small" />
        <QuestionsContainer />
      </div>
    );
  }
}

export default Home;
