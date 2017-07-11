import React, { Component } from 'react';
import { input, filter } from './styles.css';

const Filters = props =>
  <div className={input}>
    <input className={filter} placeholder={'filter by title'} onChange={props.filter} />
    <input className={filter} placeholder={'filter by decade'} onChange={props.filter} />
  </div>;

export default Filters;
