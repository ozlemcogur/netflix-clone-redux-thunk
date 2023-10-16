import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { baseImageURL, options } from "../constants/apiConstants"
import Loading from '../components/Loading'
import Badget from '../components/Badget'

const DetailPage = () => {
  const { movie_id } = useParams()
  const [detail, setDetail] = useState(null)
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((response) => setDetail(response.data))
  }, [])
  console.log(detail)
  const sum = detail?.revenue - detail?.budget
  if (!detail) return <Loading />
  return (
    <div className='movie-detail row p-4'>
      <div className='col-md-4 d-flex align-items-center justify-content-center'>
        <div className='position-relative'>
          <img src={baseImageURL.concat(detail.poster_path)} className='img-fluid rounded shadow-lg' width={300} />
          <span className='vote bg-warning p-1 rounded shadow position-absolute'>{detail.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <div className='col-md-8'>
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className='col-6 col-md-12'>
          <p>Cost: {detail.budget}</p>
          <p>Revenue: {detail.revenue}</p>
          <p>Profit: {sum}</p>
        </div>
        <div className='col-6 col-md-12'>
          <Badget barTitle={"Categories"} badgetTitle={detail.genres} />
          <Badget barTitle={"Languages"} badgetTitle={detail.spoken_languages} />
          <Badget barTitle={"Production Companies"} badgetTitle={detail.production_companies} />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
