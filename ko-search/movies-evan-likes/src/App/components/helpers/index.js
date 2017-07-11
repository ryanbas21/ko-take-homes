import axios from 'axios';
import R from 'ramda';

const sortMovies = data => R.sort(R.ascend(R.prop('title')), data);
const mapMovies = data => R.map(movie => ({ ...movie, showThoughts: false }), data);
export const createMoviesData = R.compose(sortMovies, mapMovies);
export const filterByDecade = decade =>
  R.filter(({ year }) =>
    R.where(Number(year) >= Number(decade) && Number(year) < Number(decade) + 9),
  );

export const getRottenData = (url, movie) =>
  axios
    .get(url + encodeURIComponent(movie))
    .then(data => console.log(data))
    .catch(err => console.log(err));
