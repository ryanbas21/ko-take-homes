import React from 'react';
import { render } from 'react-dom';
import App from './App';
import movieData from './movieData.json';
import './_global.css';

const omdbapiUrl = 'http://netflixroulette.net/api/api.php?title=';

render(<App apiUrl={omdbapiUrl} movieData={movieData} />, document.getElementById('app'));
