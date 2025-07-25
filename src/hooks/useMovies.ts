import { useState } from "react";
import { Movie, MovieResponse } from "../aPI/endpoint";
import { apiRequest } from "../aPI/apiRequest";

export const useMovieDetails = (movieId: number) => {
    const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
}

export const usePopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([] as Movie[]);
    const [popularLoading, setLoading] = useState(false);
    const [popularError, setError] = useState(null as string | null);

    async function fetchPopularMovies(page: number = 1) {
        setLoading(true);
        setError(null);

        try {
            const response = await apiRequest<MovieResponse>(
                'movie/popular',
                { method: 'GET', },
                { page: page, include_adult: false, sortBy: 'popularity.desc' }
            );

            
            if (response.status === 200) {
                setPopularMovies(response.data.results);
            } else {
                setError(`Error fetching movies: ${response.statusText}`);
                throw new Error(`Error fetching movies: ${response.statusText}`);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }

    return { 
        popularMovies, 
        popularLoading, 
        popularError, 
        fetchPopularMovies, 
    };
};

export const useNowPlayingMovies = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([] as Movie[]);
    const [NowPlayingLoading, setLoading] = useState(false);
    const [NowPlayingError, setError] = useState(null as string | null);

        async function fetchNowPlayingMovies (page: number = 1) {
        setLoading(true);
        setError(null);

        try {
            const response = await apiRequest<MovieResponse>(
                'movie/now_playing',
                { method: 'GET', },
                { page: page, include_adult: false }
            );

            if (response.status === 200) {
                setNowPlayingMovies(response.data.results);
            } else {
                setError(`Error fetching movies: ${response.statusText}`);
                throw new Error(`Error fetching movies: ${response.statusText}`);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }

    return {
        nowPlayingMovies,
        NowPlayingLoading,
        NowPlayingError,
        fetchNowPlayingMovies
    };
}

export const useUpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([] as Movie[]);
    const [upcomingLoading, setLoading] = useState(false);
    const [upcomingError, setError] = useState(null as string | null);

    function filterUpcomingMovies(movies: Movie[]) {
        return movies.filter(movie => {
            const releaseDate = new Date(movie.release_date);
            return releaseDate > new Date();
        })
    }

    async function fetchUpcomingMovies(page: number = 1) {
        setLoading(true);
        setError(null);

        try {
            const response = await apiRequest<MovieResponse>(
                'movie/upcoming',
                { method: 'GET', },
                { page: page, include_adult: false, sortBy: 'popularity.desc' }
            );

            if (response.status === 200) {
                const upcomingMovies = filterUpcomingMovies(response.data.results);
                setUpcomingMovies(upcomingMovies);
            } else {
                setError(`Error fetching movies: ${response.statusText}`);
                throw new Error(`Error fetching movies: ${response.statusText}`);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }

    return {
        upcomingMovies,
        upcomingLoading,
        upcomingError,
        fetchUpcomingMovies
    };
};
