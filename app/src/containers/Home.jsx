import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateView } from '../store/actions';
import QuestionBox from '../components/QuestionBox.jsx';
import Button from '../components/Button.jsx';

class Home extends Component {
  render() {
    const { view, updateView } = this.props;

    if (view === 'locations' || view === 'genres') {
      return (
        <div className="section is-large">
          <QuestionBox view={view} />
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

// Maps state/actions to props
const mapStateToProps = state => ({
  view: state.view,
});

const mapDispatchToProps = dispatch => ({
  updateView: view => dispatch(updateView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
