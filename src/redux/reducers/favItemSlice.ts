import { Movie } from "../../aPI/endpoint"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FavoriteItem {
    favorites: Movie[]
}

const initialState: FavoriteItem = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'FavoriteSlice',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movie>) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(movie => movie.id !== action.payload)

        }
    }
})

export const favReducer = favoriteSlice.reducer
export const {addFavorite, removeFavorite} = favoriteSlice.actions