import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchquery] = useSearchParams();
    const searchText= searchquery.get('query');

    useEffect(() => {
        console.log('Search Text:', searchText);
    }, [])

    return (
        <div>
            <h1>Search Results for: {searchText}</h1>
        </div>
    )
}

export default Search;