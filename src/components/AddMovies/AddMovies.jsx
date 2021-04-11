import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';


function AddMovies(){

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('')

    const sendMovie = () =>{
        const addMovie = {
            title: title,
            poster: poster,
            description: description,
            genre: genre
        }
        if(genre === '') {
            window.alert("Select a genre")
            return
        }

        console.log(addMovie)
        dispatch({type:'SEND_MOVIE', payload: addMovie})
        history.push('/');
    }

    const backToHome = () =>{
        history.push('/');
    }

    return(
        <div>
            <h2>Add A Movie</h2>
            <input placeholder="Movie Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <input placeholder="Movie URL" value={poster} onChange={(event) => setPoster(event.target.value)}></input>
            <button onClick={backToHome}>Cancel</button>
            <div>
                <p>Description</p>
                <textarea placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <select onChange={(event) => setGenre(event.target.value)}>
                <option selected disabled >Select Genre</option>
                <option value={1} >Adventure</option>
                <option value={2}>Animated</option>
                <option value={3} >Biographical</option>
                <option value={4} >Comedy</option>
                <option value={5} >Disaster</option>
                <option value={6} >Drama</option>
                <option value={7} >Epic</option>
                <option value={8} >Fantasy</option>
                <option value={9} >Musical</option>
                <option value={10} >Romantic</option>
                <option value={11} >Science Fiction</option>
                <option value={12} >Space-Opera</option>
                <option value={13} >Superhero</option>
            </select>
            <div>
                <button onClick={sendMovie}>Save</button>
            </div>
        </div>
    )
}

export default AddMovies;