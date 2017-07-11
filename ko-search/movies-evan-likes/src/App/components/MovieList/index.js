import React, { Component } from 'react';
import R from 'ramda';
import { centeredContainer } from 'sharedStyles.css';
import { Filters, Results } from '../index';
import movieData from '../../../movieData.json';
import MovieItem from './MovieItem';
import { createMoviesData, filterByDecade } from '../helpers/index';
import { container } from './styles.css';

export default class MovieList extends Component {
  state = {
    movies: createMoviesData(movieData),
  };

  filterByDecade = e =>
    e.target.value.length > 1
      ? this.setState({
        movies: filterByDecade(e.target.value, this.state.movies),
      })
      : this.setState({ movies: createMoviesData(movieData) });

  filterByTitle = e =>
    e.target.value.length > 1
      ? this.setState({
        movies: R.filter(
            movie => R.toLower(movie.title).includes(R.toLower(e.target.value)),
            this.state.movies,
          ),
      })
      : this.setState({ movies: createMoviesData(movieData) });

  handleTitleClick = e => e.stopPropagation();

  showEvanThoughts = ({ title }) =>
    this.setState({
      movies: this.state.movies.map(
        movie => (movie.title === title ? { ...movie, showThoughts: !movie.showThoughts } : movie),
      ),
    });

  render() {
    return (
      <div className={container}>
        <Filters filterByDecade={this.filterByDecade} filterByTitle={this.filterByTitle} />
        {this.state.movies.map(movie =>
          <MovieItem
            handleTitleClick={this.handleTitleClick}
            showEvanThoughts={() => this.showEvanThoughts(movie)}
            key={`${movie.title}${movie.year}`}
            year={movie.year}
            thoughts={!movie.showThoughts ? `${movie.evanSays.slice(0, 25)}...` : movie.evanSays}
            title={movie.title}
          />,
        )}
      </div>
    );
  }
}
