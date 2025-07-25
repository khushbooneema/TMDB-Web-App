import { useState } from 'react';
import { Movie, MovieResponse, People, PeopleResponse } from '../aPI/endpoint';
import { apiRequest } from '../aPI/apiRequest';
import { queries } from '@testing-library/dom';

export const useSearch = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [tvShows, setTvShows] = useState<Movie[]>([]);
    const [people, setPeople] = useState<People[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null as string | null);
    const [totalMovies, setTotalMovies] = useState(0);
    const [totalTvShows, setTotalTvShows] = useState(0);
    const [totalPeople, setTotalPeople] = useState(0);

    async function searchMovies(searchItem: string) {
        try {
            setLoading(true);
            const response = await apiRequest<MovieResponse>(
                'search/movie',
                { method: 'GET' },
                { query: searchItem, include_adult: false }
            );

            if (response.status === 200) {
                setMovies(response.data.results);
                setTotalMovies(response.data.total_results);
                console.log('Movies results:', response.data);
            } else {
                throw new Error(`Error fetching search results: ${response.statusText}`);
            }

        } catch (error) {
            console.log('Error fetching search results:', error);
            setError('error');
        } finally {
            setLoading(false);
        }
    }

    async function searchTVShows(searchText:string) {
        try {
            setLoading(true);
            const response = await apiRequest<MovieResponse>(
                'search/tv',
                { method: 'GET' },
                { query: searchText, include_adult: false }
            );

            if (response.status === 200) {
                setTvShows(response.data.results);
                setTotalTvShows(response.data.total_results);
            } else {
                throw new Error(`Error fetching search results: ${response.statusText}`);
            }

        } catch (error) {
            console.log('Error fetching search results:', error);
            setError('error');
        } finally {
            setLoading(false);
        } 
    }

    async function searchPeople(searchText: string) {
         try {
            setLoading(true);
            const response = await apiRequest<PeopleResponse>(
                'search/person',
                { method: 'GET' },
                { query: searchText, include_adult: false }
            );

            if (response.status === 200) {
                setPeople(response.data.results);
                setTotalPeople(response.data.total_results);
            } else {
                throw new Error(`Error fetching search results: ${response.statusText}`);
            }

        } catch (error) {
            console.log('Error fetching search results:', error);
            setError('error');
        } finally {
            setLoading(false);
        }
    }
    
    return {
        movies,
        tvShows,
        people,
        loading,
        error,
        searchMovies,
        searchTVShows,
        searchPeople,
        totalMovies,
        totalTvShows,
        totalPeople
    };
}