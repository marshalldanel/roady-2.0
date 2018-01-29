import { combineReducers } from 'redux';
import ViewReducer from './reducer_view';
import GenreReducer from './reducer_genres';
import LocationReducer from './reducer_locations';

const rootReducer = combineReducers({
  view: ViewReducer,
  genres: GenreReducer,
  locations: LocationReducer,
});

export default rootReducer;
