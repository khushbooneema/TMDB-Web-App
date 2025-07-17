import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import './search.css';
import { useSearch } from "../../hooks/useSearch";
import SearchItemGrid from "../common/searchItemGrid";

const Search = () => {
    const [searchquery] = useSearchParams();
    const searchText= searchquery.get('query');
    const { results, searchMovies } = useSearch();

    const categories = ['Movies', 'TV Shows', 'People' , 'Collections', 'Companies', 'Keywords', 'Networks'];

    useEffect(() => {
        console.log('Search Text:', searchText);
        searchMovies(searchText || '');
    }, [])

    return (
        <div className="SearchBody">
            <div className="categoryContainer">
                <tbody>
                    <th className="categoryHeader">Search Results</th>
                    {categories.map((category, index) => (
                        <tr className="categoryRow" key={index}>
                            <td>{category}</td>
                        </tr>
                    ))}
                </tbody>
            </div>

            <div className="searchResultsContainer">
                { results.length > 0 ? (
                    results.map((movie) => (
                        <SearchItemGrid
                            key={movie.id}
                            item={movie}
                        />
                    ))
                ) : (
                    <div>No results found</div>
                )}
            </div>
        </div>
    )
}

export default Search;