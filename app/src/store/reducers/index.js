import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ViewReducer from './reducer_view';
import GenreReducer from './reducer_genres';
import LocationReducer from './reducer_locations';

const rootReducer = combineReducers({
  view: ViewReducer,
  genres: GenreReducer,
  locations: LocationReducer,
  form: formReducer,
});

export default rootReducer;
