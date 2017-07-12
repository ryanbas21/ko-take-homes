import React, { Component } from 'react';
import { centeredContainer } from 'sharedStyles.css';
import { filter } from './styles.css';

const Filters = props =>
  <div className={centeredContainer}>
    <input className={filter} placeholder={'filter by title'} onChange={props.filterByTitle} />
    <input className={filter} placeholder={'filter by decade'} onChange={props.filterByDecade} />
  </div>;

export default Filters;
