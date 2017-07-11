import React from 'react';
import { container, formatMovie, title, movieTitle, text } from './styles.css';
import { centeredContainer } from 'sharedStyles.css';

export default props =>
  <div className={(centeredContainer, formatMovie)} onClick={props.showEvanThoughts}>
    <div className={(text, title)}>
      <a
        onClick={props.handleTitleClick}
        className={movieTitle}
        href="www.google.com"
      >{`${props.title}`}</a>
      {' | '}
      {props.year}
    </div>
    <div>
      Evans Thoughts: {props.thoughts}
    </div>
  </div>;
