import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCv3ulr7hV5EUqmfzsQenJWwJvOVztNZYg';

const App = () => ({
  return (
    <div>
      <SearchBar />
    </div>
  );
});

ReactDOM.render(<App />, document.querySelector('.container'));
