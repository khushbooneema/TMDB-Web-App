import { ThunkAction } from "@reduxjs/toolkit";
import { Movie } from "../../aPI/endpoint";
import { addFavorite, removeFavorite } from "../reducers/favItemSlice";
import { RootState } from "../store/store";

export const addMovieToFavList = (movie: Movie): ThunkAction<void, RootState, unknown, any> => 
    async(dispatch, getState) => {
    
    try {
        dispatch(addFavorite(movie))
        console.log("Added to favorite list")
    } catch(error) {
        console.log("Error at adding movie to fav list", error)
    }
}

export const removeMovieFromFavList = (id: number): ThunkAction<void, RootState, unknown, any> =>
    async(dispatch, getState) => {
    try {
        dispatch(removeFavorite(id))
        console.log("Remove from favorite list")
    } catch (error) {
        console.log("Error at remove from favorite list", error)
    }
}