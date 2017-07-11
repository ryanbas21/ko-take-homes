import axios from 'axios';
import R from 'ramda';

const sortMovies = data => R.sort(R.ascend(R.prop('title')), data);

const mapMovies = data => R.map(movie => ({ ...movie, showThoughts: false }), data);

export const createMoviesData = R.compose(sortMovies, mapMovies);

export const filterByDecade = (decade, data) =>
  R.filter(
    ({ year }) =>
      Number(R.slice(2, 4, year)) >= Number(decade) &&
      Number(R.slice(2, 4, year)) < Number(decade) + 9,
    data,
  );

export const getRottenData = (url, movie) => axios.get(url + encodeURIComponent(movie));
