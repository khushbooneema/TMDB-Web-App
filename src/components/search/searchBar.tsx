import react from "react";
import './searchBar.css';
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const { searchMovies } = useSearch()

    const navigation = useNavigate()

    const handleSearch = () => {
        if (searchText.trim() === "") 
            return 
        
        searchMovies(searchText);
        navigation('./search?query=' + encodeURIComponent(searchText.trim()));
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
                        }}
                />
                <button name="Search" type="submit" className="searchButton" onClick={() => {
                    // Handle search button click
                    try {
                        handleSearch()
                    } catch (error) {
                        console.error('Error searching movies:', error);
                    }
                    
                }}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
