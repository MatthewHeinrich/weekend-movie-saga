import React, {useState} from 'react';
import {useDispatch} from 'react-redux'


function AddMovies(){

    const dispatch = useDispatch();

    const [addTitle, setAddTitle] = useState('');
    const [addUrl, setAddUrl] = useState('');

    const handleTitle = (event) =>{
        setAddTitle(event.target.value);
    }

    const handleUrl = (event) =>{
        setAddUrl(event.target.value);
    }

    const saveMovie = () =>{
        dispatch({type:'FETCH_MOVIES', payload: addTitle})
    }

    return(
        <div>
            <h2>Add A Movie</h2>
            <input placeholder="Movie Title" value={addTitle} onChange={handleTitle}></input>
            <input placeholder="Movie URL" value={addUrl} onChange={handleUrl}></input>
            <button onClick={saveMovie}>Cancel</button>
            <p>Description: -Movie Description-</p>
            <select>
                <option selected disabled >Select Genre</option>
                <option>Adventure</option>
                <option>Animated</option>
                <option>Biographical</option>
                <option>Comedy</option>
                <option>Disaster</option>
                <option>Drama</option>
                <option>Epic</option>
                <option>Fantasy</option>
                <option>Musical</option>
                <option>Romantic</option>
                <option>Science Fiction</option>
                <option>Space-Opera</option>
                <option>Superhero</option>
            </select>
            <div>
                <button>Save</button>
            </div>
        </div>
    )
}

export default AddMovies;