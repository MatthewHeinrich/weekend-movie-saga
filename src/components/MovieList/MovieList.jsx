import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
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
                <button>Add Movies</button>
            </Link>
            <section className="movies">
                {movies.map(movie => {
                    
                    return (
                        <Link to={`/details/${movie.id}`}>
                            <div onClick={showDetails}key={movie.id} >
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title}/>
                            </div>
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;