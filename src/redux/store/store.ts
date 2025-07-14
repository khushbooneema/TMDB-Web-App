import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "../reducers/favItemSlice";
import { watchListReducer } from "../reducers/watchListSlice";

const store = configureStore({
    reducer: {favReducer, watchListReducer},
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch