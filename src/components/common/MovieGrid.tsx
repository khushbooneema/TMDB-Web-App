import { Movie } from "../../aPI/endpoint";
import react, { useEffect, useState } from "react";
import './movieCSS.css'
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as favIconSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as favIcon} from "@fortawesome/free-regular-svg-icons";
import { faList as watchlist} from "@fortawesome/free-solid-svg-icons";
import { faListCheck as checkedWatchList } from "@fortawesome/free-solid-svg-icons";
import { useFavorite } from "../../hooks/useFavorites";
import { useWatchList } from "../../hooks/useWatchlist";
import { useLocalStorageItems } from "../../localStorage/UseLocalSavedItems";

function MovieGrid({ movie }: { movie: Movie }) {
    const [showActionList, setshowActionList] = useState(false)
    const {isFavorite, toggleFavorite} = useFavorite()
    const {isInWatchList, toggleWatchList} = useWatchList()

    const { favorites, watchList } = useLocalStorageItems()

    useEffect(() => {
        if (favorites.includes(movie.id)) {
            toggleFavorite(movie)
        }

        if (watchList.includes(movie.id)) {
            toggleWatchList(movie)
        }
    }, [])

    return (
       <div className="movie-grid">
           <img className="img" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
           <div className="three-dot-icon" onClick={() => {
                setshowActionList(true)
           }}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
           </div>
           <Progress value={Math.trunc(movie.vote_average*10)} />

           {showActionList && (
             <div onClick={() => {setshowActionList(false)}} className="dot-icon-overlay">
                <div className="action-list">
                    <div 
                        className = "action-item" 
                        onClick={() => {
                            toggleFavorite(movie)
                        }}
                    >   
                        <FontAwesomeIcon icon={isFavorite == true ? favIconSolid : favIcon}/>
                        <span>Favorite</span>
                    </div>

                    <div 
                        className = "action-item" 
                        onClick={() => {
                            toggleWatchList(movie)
                        }}
                    >
                        <FontAwesomeIcon icon={isInWatchList == true ? checkedWatchList : watchlist }/>
                        <span>Watchlist</span>
                    </div>
                </div>
             </div>
           )}
       </div>
   )
}

export default MovieGrid;

