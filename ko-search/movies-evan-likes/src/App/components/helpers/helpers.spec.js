import test from 'tape';
import { sortMovies, mapMovies, createMoviesData, filterByDecade, filterByTitle } from './index';
import dataFactory from './testdata';

test('Testing Helper Functions', nest => {
  nest.test('Sort Movies', t => {
    const msg = 'Movies should be sorted alphabetically';
    const expected = [{ title: 'a movie' }, { title: 'b movie' }, { title: 'c movie' }];
    const actual = sortMovies([{ title: 'c movie' }, { title: 'b movie' }, { title: 'a movie' }]);

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Add Show Thoughts to Data', t => {
    const msg = 'Should Add a Show Thoughts boolean key to data';
    const expected = [
      { title: 'a movie', showThoughts: false },
      { title: 'b movie', showThoughts: false },
      { title: 'c movie', showThoughts: false },
    ];
    const actual = mapMovies([{ title: 'a movie' }, { title: 'b movie' }, { title: 'c movie' }]);

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Filter By Decade', t => {
    const msg = 'Should Filter results by decade';
    const data = dataFactory();
    const expected = [
      {
        title: 'Apollo 13',
        year: '1995',
        evanSays:
          "One of my favorite space movies of all time. Makes me both incredibly proud as a member of the human race and incredibly frustrated we haven't done anything in space remotely close to what we did in the 60's & 70's since. NASA is awesome, and this film really feels great to watch. Not to mention it has an excellent musical score.",
      },
    ];
    const actual = filterByDecade('90', data);

    t.same(actual, expected, msg);
    t.end();
  });
  nest.test('Filter By Title', t => {
    const msg = 'Should Filter list by title';
    const data = dataFactory();
    const expected = [
      {
        title: 'Arrival',
        year: '2016',
        evanSays:
          "Loved this movie! Cerebral, engaging science fiction at its best. Do yourself a favor and don't watch any trailers or read anything about it before seeing it. You won't be disappointed!",
      },
    ];
    const actual = filterByTitle('Arrival', data);

    t.same(actual, expected, msg);
    t.end();
  });
});
