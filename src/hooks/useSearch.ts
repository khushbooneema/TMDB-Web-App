import { useState } from 'react';
import { Movie } from '../aPI/endpoint';
import { apiRequest } from '../aPI/apiRequest';
import { queries } from '@testing-library/dom';

export const useSearch = () => {
    const [results, setResults] = useState<Movie[]>([]);
    const [popularLoading, setLoading] = useState(false);
    const [popularError, setError] = useState(null as string | null);

    async function searchMovies(searchItem: string) {
        try {
            setLoading(true);
            const response = await apiRequest<Movie[]>(
                'search/movie',
                { method: 'GET' },
                { query: searchItem, include_adult: false }
            );

            if (response.status === 200) {
                setResults(response.data);
                console.log('Search results:', response.data);
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
        results,
        popularLoading,
        popularError,
        searchMovies,
    };
}