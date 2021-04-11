import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import axios from 'axios'
import './MovieList.css'
import Details from '../Details/Details'

function MovieList(props) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); // sends a dispatch to render existing movies on page
    }, []);

    return ( // renders a list of all movies in db
        <main>
            <h1>MovieList</h1>
            <Link to='/AddMovies'>
                <button id="button1" class="btn btn-info">Add Movies</button>
            </Link>
            <section className="movies">
                {movies.map(movie => {
                    
                    return (
                        <div class="card gradient-border" >
                            <div class="card-header">
                            <p class="card-title">{movie.title}</p>
                            </div>
                            <img class="card-img-top" height={300} width={250} src={movie.poster} alt={movie.title}/>
                        
                            <div  class="card-body" onClick={showDetails}key={movie.id} >
                            
                                <Link to={`/details/${movie.id}`}>
                                <a class="btn btn-outline-warning" >Details</a>
                                </Link>
                            </div>
                        
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;