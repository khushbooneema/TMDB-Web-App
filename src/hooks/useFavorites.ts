import { useState } from "react"
import { useDispatch, useSelector, UseSelector } from "react-redux"
import { Movie } from "../aPI/endpoint"
import { RootState, AppDispatch } from "../redux/store/store"
import { addMovieToFavList, removeMovieFromFavList } from "../redux/actions/favActions"
import { useLocalStorageItems } from "../localStorage/UseLocalSavedItems"

export const useFavorite = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [favorites, setFavorites] = useState<Movie[]>([])
    const { addToFavLocalStorage, removeToFavLocalStorage } = useLocalStorageItems()

    const state = useSelector( (state: RootState) => state.favReducer.favorites)
    const dispatch = useDispatch<AppDispatch>()

    function toggleFavorite(movie: Movie) {
        console.log("Toggle button for movie to fav/unfav")
        
        if (!isFavorite) {
            addToFavLocalStorage(movie.id)
            dispatch(addMovieToFavList(movie))
        } else {
            removeToFavLocalStorage(movie.id)
            dispatch(removeMovieFromFavList(movie.id))
        }

        setIsFavorite(!isFavorite)
    }

    return { 
        isFavorite,
        toggleFavorite
    }
}