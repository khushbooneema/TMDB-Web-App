import React from "react";
import { Movie } from '../../aPI/endpoint';
import './searchItemGrid.css'; 

interface SearchItemGridProps {
    item: Movie;
}

const SearchItemGrid = ({ item }: SearchItemGridProps) => {
    return (
        <div className="search-item">
            <img className="search-item-img" src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
            <div className="search-item-details">
                <text className ="search-item-title">{item.title}</text>
                <text className="search-item-release-date">{item.release_date}</text>
                <text className="search-item-overview">{item.overview}</text>
            </div>
        </div>
    );
};

export default SearchItemGrid;
