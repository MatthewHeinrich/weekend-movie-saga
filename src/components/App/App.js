import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import MovieList from '../MovieList/MovieList'
import AddMovies from '../AddMovies/AddMovies'
import Details from '../Details/Details'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>    
        <Route path="/" exact>
          <MovieList />
        </Route> 
        <Route path='/details'>
          <Details />
        </Route>
        <Route path ="/addmovies" exact>
            <AddMovies />
        </Route>    
    
      </Router>
    </div>
  );
}


export default App;
