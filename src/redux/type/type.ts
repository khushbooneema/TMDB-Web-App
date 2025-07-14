import { Movie } from "../../aPI/endpoint"

export const Add_favorite = "ADD_FAVORITE"
export const Remove_favorite = "REMOVE_FAVORITE"

interface AddFavorite {
    type: typeof Add_favorite
    description: "Added to the list of favorites"
    paylod: Movie[]
}

interface RemoveFavorite {
    type: typeof Remove_favorite
    description: "Remove from the list of favorites"
    paylod: number
}