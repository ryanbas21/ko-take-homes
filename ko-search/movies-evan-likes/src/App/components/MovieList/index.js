import React, { Component } from 'react';
import R from 'ramda';
import { centeredContainer } from 'sharedStyles.css';
import { Filters, Results } from '../index';
import movieData from '../../../movieData.json';
import MovieItem from './MovieItem';
import {
  cacheRequest,
  createMoviesData,
  filterByDecade,
  filterByTitle,
  getMovieData,
} from '../helpers/index';
import { container } from './styles.css';

export default class MovieList extends Component {
  state = {
    movies: createMoviesData(movieData),
  };
  componentWillMount() {
    return this.state.movies.forEach(movie => {
      if (!localStorage.getItem(`${movie.title} ${movie.year}`)) {
        getMovieData(this.props.url, movie.title)
          .then(res => res.data)
          .then(data => {
            this.setState({
              ...this.state,
              movies: this.state.movies.map(
                movie =>
                  movie.title === data.Title
                    ? {
                      ...movie,
                      url: data.tomatoURL,
                      rating: data.imdbRating,
                    }
                    : movie,
              ),
            });
            return data;
          })
          .then(req => cacheRequest(req))
          .catch(err => err);
      } else {
        const saved = localStorage.getItem(`${movie.title} ${movie.year}`);
        this.setState({
          ...this.state,
          movies: this.state.movies.map(movie => ({
            ...movie,
            url: saved.tomatoURL,
            rating: saved.imdbRating,
          })),
        });
      }
    });
  }
  filterByDecade = e =>
    e.target.value.length > 1
      ? this.setState({
        movies: filterByDecade(e.target.value, this.state.movies),
      })
      : this.setState({ movies: createMoviesData(movieData) });

  filterByTitle = e =>
    e.target.value.length > 1
      ? this.setState({
        movies: filterByTitle(e.target.value, this.state.movies),
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
            thoughts={!movie.showThoughts ? `${movie.evanSays.slice(0, 25)}...` : movie.evanSays}
            movie={movie}
          />,
        )}
      </div>
    );
  }
}
