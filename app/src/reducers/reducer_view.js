import { UPDATE_VIEW } from '../actions';

export default (state = 'locations', action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.view;
    default:
      return state;
  }
};
