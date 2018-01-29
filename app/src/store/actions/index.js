export const UPDATE_VIEW = 'UPDATE_VIEW';
export const ADD_GENRE = 'ADD_GENRE';
export const REMOVE_GENRE = 'REMOVE_GENRE';
export const SET_CITY = 'SET_CITY';
export const SET_DATES = 'SET_DATES';
export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';

export const updateView = view => ({
  type: 'UPDATE_VIEW',
  view,
});

export const addGenre = genre => ({
  type: 'ADD_GENRE',
  genre,
});

export const removeGenre = genre => ({
  type: 'REMOVE_GENRE',
  genre,
});

export const setCity = (index, city) => ({
  type: 'SET_CITY',
  index,
  city,
});

export const setDates = (index, startDate, endDate) => ({
  type: 'SET_DATES',
  index,
  startDate,
  endDate,
});

export const addLocation = (locations, index) => ({
  type: 'ADD_LOCATION',
  locations,
  index,
});

export const removeLocation = index => ({
  type: 'REMOVE_LOCATION',
  index,
});
