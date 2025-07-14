import { Movie } from "../../aPI/endpoint";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WatchListItem {
    watchlist: Movie[]
}

const initialState: WatchListItem = {
    watchlist: []
}

export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addToWatchList: (state, action: PayloadAction<Movie>) => {
            state.watchlist.push(action.payload)
        },
        removeFromWatchList: (state, action: PayloadAction<number>) => {
            state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload)
        }
    }
})

export const watchListReducer = watchListSlice.reducer
export const {addToWatchList, removeFromWatchList} = watchListSlice.actions