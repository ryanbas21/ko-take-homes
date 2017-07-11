import React from 'react';
import { container, formatMovie, movieTitle, text } from './styles.css';

export default props =>
  <div className={formatMovie} onClick={props.showEvanThoughts}>
    <div className={text}>
      <a
        onClick={props.handleTitleClick}
        className={movieTitle}
        href="www.google.com"
      >{`Title: ${props.title}`}</a>
      {' | '}
      {props.year}
    </div>
    <div>
      Evans Thoughts: {props.thoughts}
    </div>
  </div>;
