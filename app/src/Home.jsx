import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateView } from './store/actions';
import QuestionsContainer from './QuestionsContainer.jsx';
import Button from './Button.jsx';

class Home extends Component {
  render() {
    const { view, updateView } = this.props;

    if (view === 'locations' || view === 'genres') {
      return (
        <div className="section is-large">
          <QuestionsContainer />
          <Button
            view={view}
            updateView={updateView}
          />
          {/* <CitiesResults />   */}

        </div>
      );
    } else if (view === 'itinerary') {
      return (
        <div>
          Hi
        </div>
      );
    }
  }
}

// Maps actions to props
const mapDispatchToProps = dispatch => ({
  updateView: view => dispatch(updateView(view)),
});

export default connect(null, mapDispatchToProps)(Home);
