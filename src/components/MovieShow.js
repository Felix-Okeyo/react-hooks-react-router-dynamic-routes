import React from "react";
import { useParams } from "react-router-dom"

function MovieShow ({ movies }){
    // call useParams to access the `params` from the url
const params = useParams();
    console.log(params);

    const movies = movies.find(movie => movie.id === parseInt(params.movieId))
    
    return (
        <div>
            {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}
            <h3>{movie.title}</h3>
        </div>
    )
}

export default MovieShow;