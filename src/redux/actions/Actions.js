import axios from "axios"
import { actionTypes } from "./ActionTypes"
import { options } from "../../constants/apiConstants"

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export const setLoading = (payload) => ({
    type: actionTypes.SET_LOADING,
    payload
})
export const getMovies = () => {
    return async function (dispatch) {
        axios.get("/movie/popular", options)
            .then((response) => dispatch({
                type: actionTypes.SET_MOVIES,
                payload: response.data.results
            })
            )
            .catch((err) => console.log(err))
    }
}
export const getGenres = () => (dispatch) => {
    axios.get("/genre/movie/list", options)
        .then((response) => dispatch({
            type: actionTypes.SET_CATEGORIES,
            payload: response.data.genres
        }))
        .catch((err) => console.log(err))
}