import React, { useEffect } from 'react'
import axios from "axios"
import { options } from "../constants/apiConstants"
import { useDispatch, useSelector } from "react-redux"
import { actionTypes } from '../redux/actions/ActionTypes'
import Hero from '../components/Hero'
import { getGenres, getMovies, setLoading } from '../redux/actions/Actions'
import MovieList from '../components/MovieList'

const MainPage = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector((store) => ({ genres: store.movieReducer.genres }))
    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(getMovies())
        dispatch(getGenres())
    }, [])
    console.log(genres)
    return (
        <div>
            <Hero />
            {genres.map((genre) => (<MovieList key={genre.id} genre={genre} />))}
        </div>
    )
}

export default MainPage
