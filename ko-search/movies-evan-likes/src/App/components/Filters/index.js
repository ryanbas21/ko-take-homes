import React, { Component } from 'react';
import { input, filter } from './styles.css';
import { centeredContainer } from 'sharedStyles.css';

const Filters = props =>
  <div className={centeredContainer}>
    <input className={filter} placeholder={'filter by title'} onChange={props.filterByTitle} />
    <input className={filter} placeholder={'filter by decade'} onChange={props.filterByDecade} />
  </div>;

export default Filters;
