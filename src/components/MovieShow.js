import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
    const params = useParams()
    console.log(params)
    console.log(movies)

    return (
        <div>
            <h3>{movies[params.movieKey].title}</h3>
        </div>
    )
}

export default MovieShow;