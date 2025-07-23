import { useState } from 'react';
import { Movie, People } from '../aPI/endpoint';
import { apiRequest } from '../aPI/apiRequest';
import { queries } from '@testing-library/dom';

export const useSearch = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [tvShows, setTvShows] = useState<Movie[]>([]);
    const [people, setPeople] = useState<People[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null as string | null);

    async function searchMovies(searchItem: string) {
        try {
            setLoading(true);
            const response = await apiRequest<Movie[]>(
                'search/movie',
                { method: 'GET' },
                { query: searchItem, include_adult: false }
            );

            if (response.status === 200) {
                setMovies(response.data);
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
            const response = await apiRequest<Movie[]>(
                'search/tv',
                { method: 'GET' },
                { query: searchText, include_adult: false }
            );

            if (response.status === 200) {
                setTvShows(response.data);
                console.log('TV shows results:', response.data);
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
            const response = await apiRequest<People[]>(
                'search/person',
                { method: 'GET' },
                { query: searchText, include_adult: false }
            );

            if (response.status === 200) {
                setPeople(response.data);
                console.log('Persons results:', response.data);
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
    };
}