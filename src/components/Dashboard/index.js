import React, {useState, useEffect} from 'react'
import {fetchAllMovies, fetchAllPeople} from "../../redux/action";
import {connect} from "react-redux";
import DropDown from '../DropDown/index';
import {makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    padding: '40px 0',
    justifyContent: 'center',
  },
  filmContainer: {
    width: '300px'
  },
  filmsListContainer: {},
  filmListBox: {
    padding: '5px',
    fontSize: '16px',
    border: '1px solid #666',
    margin: '10px 0 20px',
    textAlign: 'left'
  },
  selectedMovieContainer: {},
  customLabel: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left'
  },
  eachFilm: {
    padding: '5px 0',
    cursor: 'pointer'
  },
  selectedMovieName: {
    textAlign: 'left',
    padding: '10px 0 10px',
    borderBottom: '1px solid gray',
  }
}));

function MoviesDashboard(props) {
  const classes = useStyles();
  // console.log(props.moviesList);
  const {moviesList, peopleList} = props;
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [selectedCharFilms, setSelectedCharFilms] = useState([]);
  const [selectedDropDownValue, setDropDOwnValue] = useState([]);
  const [selectedMovie, setSelectedMovies] = useState('');

  useEffect(() => {
    props.fetchAllMovies();
    props.fetchAllPeople();
  }, []);

  useEffect(() => {
    if (peopleList) setPeople(peopleList.results);
  }, [peopleList]);

  useEffect(() => {
    if (moviesList) {
      setMovies(moviesList.results);
      console.log(moviesList.results, 'movies.moviesList.results');
    }

  }, [moviesList]);

  useEffect(() => {
    if (selectedDropDownValue && selectedDropDownValue.films && selectedDropDownValue.films.length) {
      let films = selectedDropDownValue.films;
      let selectedCharFilms = [];
      films.forEach((url) => {
        selectedCharFilms.push(movies.find(v => v.url === url));
      });
      setSelectedCharFilms(selectedCharFilms);
    }
  }, [selectedDropDownValue]);

  const onSelectFilm = (film) => {
    setSelectedMovies(film);
  };

  return (<div className={classes.mainContainer}>
    <div className={classes.filmContainer}>
      {people && people.length ?
        <DropDown data={people} value={selectedDropDownValue} handler={setDropDOwnValue}/> : null}
      {selectedCharFilms && selectedCharFilms.length ? <div className={classes.filmsListContainer}>
        <div className={classes.customLabel}>
          List of Movies:
        </div>
        <div className={classes.filmListBox}>
          {selectedCharFilms.map((item, index) => (
            <div className={classes.eachFilm} onClick={() => onSelectFilm(item)} key={index}> {item.title}</div>
          ))}
        </div>
      </div> : null}
      {selectedMovie !== '' ? <div className={classes.selectedMovieContainer}>
        <div className={classes.customLabel}>
          Name / Year Last Release
        </div>
        <div
          className={classes.selectedMovieName}>{`${selectedMovie.title} ${selectedMovie.release_date} `}
        </div>
      </div> : null}
    </div>
  </div>);
}

const mapStateToProps = (state) => ({
  moviesList: state.movies.data,
  peopleList: state.people.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: () => dispatch(fetchAllMovies()),
  fetchAllPeople: () => dispatch(fetchAllPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDashboard);
