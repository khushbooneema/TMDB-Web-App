import react from 'react';
import { usePopularMovies, useNowPlayingMovies, useUpcomingMovies } from '../hooks/useMovies';
import MovieList from './common/MovieList'
import ToggleButtons from './common/ToggleButton';
import './home.css';

function Home() {
    const { popularMovies, popularLoading, popularError, fetchPopularMovies } = usePopularMovies()
    const { upcomingMovies, upcomingLoading, upcomingError, fetchUpcomingMovies} = useUpcomingMovies()
    const { nowPlayingMovies, nowPlayingLoading, nowPlayingError, fetchNowPlayingMovies} = useNowPlayingMovies()
    const [selectedType, setSelectedType] = react.useState('movies');

    react.useEffect(() => {
        handleTypeChange(selectedType);
    }, []);

    function handleTypeChange(type) {
        setSelectedType(type);
        
        if (type === 'movies') {
            if (popularMovies.length === 0) {
                fetchPopularMovies();
            }
            if (nowPlayingMovies.length === 0) {
                fetchNowPlayingMovies();
            }
            if (upcomingMovies.length === 0) {
                fetchUpcomingMovies();
            }
        } else {
            console.log('Fetching TV shows are not implemented yet.');
        }
    }

    return (
        <div>
            <ToggleButtons
                types={[ 
                    {name: 'Movies', value: 'movies'}, 
                    {name: 'TV Shows', value: 'tv'} 
                ]}
                selected={selectedType}
                onChange={(type) => {
                    handleTypeChange(type);
                }}
            />
            { selectedType === 'movies' && (
                <div>

                    <h1 className='header'>Popular Movies</h1>
                    <div className='movieListDiv'>
                        <MovieList movies={popularMovies} error={popularError} loading={popularLoading} />  
                    </div>
                    
                    <h1 className='header'>Now Playing Movies</h1>
                    <div className='movieListDiv'> 
                        <MovieList movies={nowPlayingMovies} error={nowPlayingError} loading={nowPlayingLoading} />
                    </div>

                    <h1 className='header'>Upcoming Movies</h1>
                    <div className='movieListDiv'> 
                        <MovieList movies={upcomingMovies} error={upcomingError} loading={upcomingLoading} />
                    </div>
                    
                </div>
            )}
            { selectedType === 'tv' && (
                <div>
                    <h1 className='header'>TV Shows</h1>
                    <p>Fetching TV shows is not implemented yet.</p>
                </div>
            )}
        </div>
    );
}

export default Home;