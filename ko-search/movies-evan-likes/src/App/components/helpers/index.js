import axios from 'axios';
import R from 'ramda';

export const sortMovies = data => R.sort(R.ascend(R.prop('title')), data);

export const mapMovies = data => R.map(movie => ({ ...movie, showThoughts: false }), data);

export const createMoviesData = R.compose(sortMovies, mapMovies);

export const filterByDecade = (decade, data) =>
  R.filter(
    ({ year }) =>
      Number(R.slice(2, 4, year)) >= Number(decade) &&
      Number(R.slice(2, 4, year)) < Number(decade) + 10,
    data,
  );

export const filterByTitle = (title, data) =>
  R.filter(movie => R.toLower(movie.title).includes(R.toLower(title)), data);

export const getMovieData = (url, title) => R.compose(axios.get, url)(title);
export const cacheRequest = movie =>
  localStorage.setItem(`${movie.Title} ${movie.Year}`, JSON.stringify(movie));
