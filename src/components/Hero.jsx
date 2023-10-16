
import { useSelector } from "react-redux"
import Loading from './Loading'
import { Link } from "react-router-dom"
import { baseImageURL } from "../constants/apiConstants"

const Hero = () => {
    const { movieList, isLoading } = useSelector((store) =>
    ({
        movieList: store.movieReducer.popularMovies,
        isLoading: store.movieReducer.isLoading
    }))
    const randomIndeks = Math.floor(Math.random() * movieList.length)
    const randomMovie = movieList[randomIndeks]
    return (
        <div className="row p-4">
            {isLoading && <Loading />}
            {!isLoading &&
                (
                    <>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center gap-3">
                            <h1>  {randomMovie?.title}</h1>
                            <p>{randomMovie?.overview}</p>
                            <p className="text-warning fw-bold">IMDB:{randomMovie?.vote_average}</p>
                            <div className="d-flex gap-3">
                                <Link to={`movie/${randomMovie?.id}`}
                                    className="btn btn-danger">
                                    Watch the Movie
                                </Link>
                                <Link className="btn btn-info">
                                    Add to List
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="image-fluid w-100"
                                src={`${baseImageURL}${randomMovie?.backdrop_path}`} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Hero
