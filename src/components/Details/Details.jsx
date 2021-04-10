import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'

function Details() {

    useEffect(() => {

        dispatch({ type: 'FETCH_ID' });
    }, []);

    const description = useSelector( (store) =>{
        console.log('use selector:', store.movies)
        return store.movies
    })
  
    
    axios.get('/api/movie').then((response) =>{
        console.log(response.data)
    }).catch((err) =>{
        alert('Error');
        console.log(err);
    })
    


    return(
        <>
        <li>
        {JSON.stringify(description)}
        </li>
        </>
    )
}

export default Details;