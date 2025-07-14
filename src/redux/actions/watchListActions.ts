import { ThunkAction } from "@reduxjs/toolkit";
import { Movie } from "../../aPI/endpoint";
import { RootState } from "../store/store";
import { addToWatchList, removeFromWatchList } from "../reducers/watchListSlice";

export const addMovieToWatchList = (movie: Movie): ThunkAction<void, RootState, unknown, any> => 
    async(dispatch, getState) => {
    try {
        dispatch(addMovieToWatchList(movie))
        console.log("Added to watchlist")
    } catch(error) {
        console.log("Error at adding movie to watchlist", error)
    }
}

export const removeMovieFromWatchList = (id: number): ThunkAction<void, RootState, unknown, any> =>
    async(dispatch, getState) => {
    try {
        dispatch(removeFromWatchList(id))
        console.log("Remove from watchlist")
    } catch (error) {
        console.log("Error at remove from watchlist", error)
    }
}