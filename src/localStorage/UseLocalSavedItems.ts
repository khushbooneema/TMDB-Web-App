import { faV } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export const Save_Favorites_Key = "Save_Favorites"
export const Save_Watchlist_Key = "Save_Watchlist"

export const useLocalStorageItems = () => {
    const [favorites, setFavorites] = useState<number[]>(() => {
        const items = localStorage.getItem(Save_Favorites_Key)
        return items ? JSON.parse(items) : []
    })

    const [watchList, setWatchlist] = useState<number[]>(() => {
        const items = localStorage.getItem(Save_Watchlist_Key)
        return items ? JSON.parse(items) : []
    })

    // local storage methods....
    function addToFavLocalStorage(id: number) {
        let items = [...favorites]
        items.push(id)
        setFavorites(items)
        localStorage.setItem(Save_Favorites_Key, JSON.stringify(items))
    }

    function addToWatchlistLocalStorage(id: number) {
        let items = [...watchList]
        items.push(id)
        setWatchlist(items)
        localStorage.setItem(Save_Watchlist_Key, JSON.stringify(items))
    }

    function removeToFavLocalStorage(id: number) {
        const items =  [...favorites] 
        items.filter(item => item !== id)
        setFavorites(items)
        localStorage.setItem(Save_Favorites_Key, JSON.stringify(items))
    }

    function removeToWatchlistLocalStorage(id: number) {
        const items = [...watchList]
        items.filter(item => item !== id)
        setWatchlist(items)
        localStorage.setItem(Save_Watchlist_Key, JSON.stringify(items))
    }

    return {
        favorites,
        watchList,
        addToFavLocalStorage,
        addToWatchlistLocalStorage,
        removeToFavLocalStorage,
        removeToWatchlistLocalStorage
    }
}