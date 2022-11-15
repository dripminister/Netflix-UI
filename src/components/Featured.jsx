import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Featured() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState(null)
  const url = //Get your API KEY and URL on https://www.themoviedb.org/

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [url])

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random()* movies.length)])
  }, [movies])

  return (
    <div className='feat-div'>
      <div className='feat-blend'></div>
      <img className='feat-img' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      <div className='feat-movie'>
        <h1 className='feat-title'>{movie?.title}</h1>
        <button className='feat-button'>WATCH NOW</button>
        <p className=''>{movie?.overview}</p>
      </div>
    </div>
  )
}
