import { useState } from "react"
import { useDispatch, useSelector, UseSelector } from "react-redux"
import { Movie } from "../aPI/endpoint"
import { RootState, AppDispatch } from "../redux/store/store"
import { addMovieToWatchList, removeMovieFromWatchList } from "../redux/actions/watchListActions"
import { useLocalStorageItems } from "../localStorage/UseLocalSavedItems"

export const useWatchList = () => {
    const [isInWatchList, setIsInWatchList] = useState(false)
    const [watchlist, setWatchlist] = useState<Movie[]>([])
    const {addToWatchlistLocalStorage, removeToWatchlistLocalStorage} = useLocalStorageItems()

    const state = useSelector( (state: RootState) => state.watchListReducer.watchlist)
    const dispatch = useDispatch<AppDispatch>()

    function toggleWatchList(movie: Movie) {
        console.log("Toggle button for movie to fav/unfav")
        
        if (!isInWatchList) {
            addToWatchlistLocalStorage(movie.id)
            dispatch(addMovieToWatchList(movie))
        } else {
            removeMovieFromWatchList(movie.id)
            dispatch(removeMovieFromWatchList(movie.id))
        }

        setIsInWatchList(!isInWatchList)
    }

    return { 
        isInWatchList,
        toggleWatchList
    }
}