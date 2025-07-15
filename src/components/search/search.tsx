import react from "react";
import './search.css';
import { useState } from "react";

const Search = () => {
    const [searchText, setSearchText] = useState("");

    function handleSearch() {
        
    }

    return (
        <div className="searchSection">
            <div className="welcomeContainer">
                <text className="title">Welcome!</text>
                <text className="subtitle">Millions of movies and TV shows to discover. Explore now.</text>
            </div>

            <div className="searchBarContainer">
                    <input
                     type="text"
                        placeholder="Search for movies..."
                        className="searchBar"
                        onChange={(e) => {
                         // Handle search input change
                            setSearchText(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                    <button name="Search" type="submit" className="searchButton" onClick={() => {
                        // Handle search button click
                        console.log("Search button clicked");
                    }}>Search</button>
                </div>
        </div>
    );
};

export default Search;
