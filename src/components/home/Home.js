import react from 'react';
import { usePopularMovies, useNowPlayingMovies, useUpcomingMovies } from '../../hooks/useMovies';
import MovieList from '../common/MovieList';
import ToggleButtons from '../common/ToggleButton';
import './home.css';
import SearchBar from '../search/searchBar'; 

function Home() {
    const { popularMovies, popularLoading, popularError, fetchPopularMovies } = usePopularMovies()
    const { upcomingMovies, upcomingLoading, upcomingError, fetchUpcomingMovies} = useUpcomingMovies()
    const { nowPlayingMovies, nowPlayingLoading, nowPlayingError, fetchNowPlayingMovies} = useNowPlayingMovies()

    react.useEffect(() => {
        fetchMovies();
    }, []);

    function fetchMovies() {        
        if (popularMovies.length === 0) {
            fetchPopularMovies();
        }
        if (nowPlayingMovies.length === 0) {
            fetchNowPlayingMovies();
        }
        if (upcomingMovies.length === 0) {
            fetchUpcomingMovies();
        }
    }

    return (
        <div className='homeBody'>
            <div className='mainDivContainer'> 
                <SearchBar />
                <div className='movieDivContainer'>
                    <h2 className='header'>Popular Movies</h2>
                    <div className='movieListDiv'>
                        <MovieList movies={popularMovies} error={popularError} loading={popularLoading} /> 
                    </div>

                    <h2 className='header'>Now Playing Movies</h2>
                    <div className='movieListDiv'>
                        <MovieList movies={nowPlayingMovies} error={nowPlayingError} loading={nowPlayingLoading} />
                    </div>

                    <h2 className='header'>Upcoming Movies</h2>
                    <div className='movieListDiv'> 
                        <div className='movieListContent'>
                            <MovieList movies={upcomingMovies} error={upcomingError} loading={upcomingLoading} />
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
}

export default Home;