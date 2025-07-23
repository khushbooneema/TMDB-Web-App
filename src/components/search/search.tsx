import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './search.css';
import { useSearch } from "../../hooks/useSearch";
import SearchItemGrid from "../common/searchItemGrid";
import { Movie, People } from "../../aPI/endpoint";

const Search = () => {
    const [searchquery] = useSearchParams();
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [searchResults, setSearchResults] = useState<(Movie | People)[]>([]);
    const searchText= searchquery.get('query');
    const { movies, tvShows, people, searchMovies, searchTVShows, searchPeople } = useSearch();

    const categories = ['Movies', 'TV Shows', 'People'];

    useEffect(() => {
        console.log('Search Text:', searchText);
        handleCategoryClick();
    }, [selectedIndex]);

    const handleCategoryClick = () => {
        if (selectedIndex === 0 && movies.length == 0) {
            searchMovies(searchText || '');
        } else if (selectedIndex === 1 && tvShows.length == 0) {
            console.log('Search TV Shows has been called');
            searchTVShows(searchText || '');
        } else if (selectedIndex === 2 && people.length == 0) {
            console.log('Search People has been called');
            searchPeople(searchText || '');
        }
    }

    return (
        <div className="SearchBody">
            <div className="categoryContainer">
                <tbody>
                    <th className="categoryHeader">Search Results</th>
                    {categories.map((category, index) => (
                        <tr className="categoryRow" key={index}>
                            <td onClick={() => setSelectedIndex(index)}>{category}</td>
                        </tr>
                    ))}
                </tbody>
            </div>

            {selectedIndex == 0 && (
            <div className="searchResultsContainer">
                { (movies.length > 0) ? (
                    movies.map((item) => (
                        <SearchItemGrid
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : (
                    <div>No results found</div>
                )}
            </div>
            )}

            {selectedIndex == 1 && (
            <div className="searchResultsContainer">
                { (tvShows.length > 0) ? (
                    tvShows.map((item) => (
                        <SearchItemGrid
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : (
                    <div>No results found</div>
                )}
            </div>
            )}

            { selectedIndex == 2 && (
                <div>People is in work in progress {searchPeople.length}</div>
            )}  

            
        </div>
    )
}

export default Search;