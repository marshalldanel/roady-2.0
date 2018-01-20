import { combineReducers } from 'redux';
import ViewReducer from './reducer_view';
import GenreReducer from './reducer_genres';

const rootReducer = combineReducers({
  view: ViewReducer,
  genres: GenreReducer,
});

export default rootReducer;
