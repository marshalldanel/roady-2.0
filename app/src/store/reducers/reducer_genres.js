import { ADD_GENRE, REMOVE_GENRE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_GENRE:
      return [action.genre, ...state];
    case REMOVE_GENRE:
      return state.filter((genre, index) => genre !== action.genre);
    default:
      return state;
  }
};
