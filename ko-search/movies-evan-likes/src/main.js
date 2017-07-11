import React from 'react';
import { render } from 'react-dom';
import App from './App';
import movieData from './movieData.json';
import './_global.css';

const omdbapiUrl = value => `http://www.omdbapi.com/?t=${value}&apikey=f8bc8b4e&tomatoes=true`;

render(<App apiUrl={omdbapiUrl} movieData={movieData} />, document.getElementById('app'));
