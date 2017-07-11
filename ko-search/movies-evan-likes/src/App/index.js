import React from 'react';
import styles from './styles.css';
import { Filters, MovieList, Results } from './components';

const App = ({ apiUrl, movieData }) =>
  <div className={styles.page}>
    <div className={styles.appDescription}>
      <h1 className={styles.title}>Movies Evan Likes!</h1>
      <p className={styles.content}>
        Below is a (not) comprehensive list of movies that Evan really likes.
      </p>
    </div>
    <MovieList url={apiUrl} />
  </div>;

export default App;
