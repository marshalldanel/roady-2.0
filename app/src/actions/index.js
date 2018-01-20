export const UPDATE_VIEW = 'UPDATE_VIEW';
export const ADD_GENRE = 'ADD_GENRE';
export const REMOVE_GENRE = 'REMOVE_GENRE';


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
