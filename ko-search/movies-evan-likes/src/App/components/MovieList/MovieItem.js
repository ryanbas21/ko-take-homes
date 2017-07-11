import React from 'react';
import { centeredContainer } from 'sharedStyles.css';
import { container, formatMovie, title, movieTitle, text } from './styles.css';

export default props =>
  <div className={(centeredContainer, formatMovie)} onClick={props.showEvanThoughts}>
    <div className={(text, title)}>
      <a onClick={props.handleTitleClick} className={movieTitle} href={props.movie.url}>{`${props
        .movie.title}  | `}</a>
      <strong>
        {'Rating '}
        {props.movie.rating}
      </strong>
      {' | '}
      {props.movie.year}
    </div>
    <div>
      Evans Thoughts: {props.thoughts}
    </div>
  </div>;
