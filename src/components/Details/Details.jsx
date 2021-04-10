import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'

function Details(props) {

    let [details, setDetails] = useState([])

    useEffect(() => {
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
    
    


    return(
        <>
        <div>
            {details.map(detail => (
                <> 
                    <h3>
                        {detail.name}
                    </h3>
                    
                </>
            ))}
                    <p>
                        {details[0]?.description}
                    </p>
        </div>

        </>
    )
}

export default Details;