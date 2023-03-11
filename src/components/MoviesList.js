import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    // console.log(movies)
    const renderMovies = Object.keys(movies).map(movieKey => {
        return (
            <li key={movieKey}>
                <Link to={`/movies/${movieKey}`}>{movies[movieKey].title}</Link>
            </li>
        )
    })
    return (
        <ul>{renderMovies}</ul>
    )
}

export default MoviesList;