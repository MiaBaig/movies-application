import axios from 'axios';

// const networkError = (error) => (dispatch) => dispatch({type: actionTypes.NETWORK_ERROR, networkError: error});
export const GETMOVIES = 'GETMOVIES';
export const GETPEOPLE = 'GETPEOPLE';
const fetchAllMovies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://swapi.dev/api/films`);
      if (res) dispatch({type: GETMOVIES, movies: res});
    } catch (error) {
      console.log(error);
    }
  }
};

const fetchAllPeople = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://swapi.dev/api/people`);
      if (res) dispatch({type: GETPEOPLE, people: res});
    } catch (error) {
      console.log(error);
    }
  }
};

export {fetchAllMovies, fetchAllPeople};
