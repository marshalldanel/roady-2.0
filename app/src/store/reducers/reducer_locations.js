import { SET_CITY, SET_DATES, ADD_LOCATION, REMOVE_LOCATION } from '../actions';

const initialState = [{
  city: '',
  startDate: '',
  endDate: '',
}];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return state.map((city, index) => {
        if (index !== action.index) {
          return state;
        }
        return {
          ...city,
          city: action.city,
        };
      });
    case SET_DATES:
      return state.map((city, index) => {
        if (index !== action.index) {
          return state;
        }
        return {
          ...city,
          startDate: action.startDate,
          endDate: action.endDate,
        };
      });
    case ADD_LOCATION:
      if (action.locations.length < 5) {
        return [
          ...state.slice(0, action.index),
          {
            city: '',
            startDate: '',
            endDate: '',
          },
        ];
      }
      return state;
    case REMOVE_LOCATION:
      console.log(action.index);
      if (locations.length > 1) {
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1),
        ];
      }
      return state;
    default:
      return state;
  }
};
