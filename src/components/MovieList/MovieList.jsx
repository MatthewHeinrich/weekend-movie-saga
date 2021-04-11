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
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const showDetails = () =>{
        
        
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Link to='/AddMovies'>
                <button id="button1" class="btn btn-primary">Add Movies</button>
            </Link>
            <section className="movies">
                {movies.map(movie => {
                    
                    return (
                        <div class="card" >
                            <img class="card-img-top" height={300} width={250} src={movie.poster} alt={movie.title}/>
                            <div >
                            <p class="card-title">{movie.title}</p>
                            </div>
                        
                            <div  class="card-body" onClick={showDetails}key={movie.id} >
                            
                                <Link to={`/details/${movie.id}`}>
                                <a href="#" class="btn btn-outline-primary">Details</a>
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