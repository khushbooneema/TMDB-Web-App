import react from 'react'
import { Movie } from '../../aPI/endpoint'
import MovieGrid from './MovieGrid'
import "./movieCSS.css"

interface MovieListParams {
    movies: Movie[]
    error: string
    loading: boolean
}
 
const MovieList = ({movies, error, loading}: MovieListParams) => {
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className='movie-list'>
                { movies.map((movie) => (
                    <MovieGrid key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList