import {GETMOVIES, GETPEOPLE} from '../action/index';

const initialState = {
  movies: [],
  people: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETMOVIES:
      return {
        ...state,
        movies: action.movies,
      };
      case GETPEOPLE:
      return {
        ...state,
        people: action.people,
      };
    default:
      break;
  }

  return state;
};

export default reducer;
