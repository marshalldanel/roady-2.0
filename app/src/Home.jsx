import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer.jsx';

class Home extends Component {
  render() {
    return (
      <div className="section is-large">
        <QuestionsContainer />
      </div>
    );
  }
}

export default Home;
