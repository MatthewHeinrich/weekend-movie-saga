import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios'

function Details(props) {

    let [details, setDetails] = useState([])
    const history = useHistory();

    useEffect(() => { // getting movie details from database
        axios.get(`/api/genre/${props.id}`).then((response) =>{
            console.log(response.data)
            setDetails(response.data)
        }).catch((err) =>{
            alert('Error');
            console.log(err);
        })
        
    }, []);

    // const description = useSelector( (store) =>{
    //     console.log('use selector:', store.movies)
    //     return store.movies
    // })
    
    console.log(props)
    
    const backHome = () =>{
        history.push('/'); 
    }
    

    // renders genres, movie poster and description 
    return( 
        <>
        <header className="detailHead"> 
            <h1>Movie Details</h1>
        </header>
        <h2 class="genre-h2"><strong>Genres:</strong></h2>
        <div>
            {details.map(detail => (
                <> 
                    <h4>
                        {detail.name} 
                    </h4>
                </>
            ))}
                <div class="card gradient-border">
                    <img height={300} width={200} src={details[0]?.poster}></img>
                </div>
                <h3 class="descr-h3">Description:</h3>
                    <p class="description">
                        {details[0]?.description}
                    </p>
        </div>
        <div class="details">
                <button id="home-btn" class="btn btn-info" onClick={backHome}>Home</button>
        </div> 

        </>
    )
}

export default Details;