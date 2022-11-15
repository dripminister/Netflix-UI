import React from 'react'
import { useState, useEffect } from 'react'
import Movie from './Movie'

export default function Section({title, APIUrl}) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(APIUrl)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }, [APIUrl])

  return (
    <div className="movie-list-container">
                <h1 className="movie-list-title">{title}</h1>
                <div className="movie-list-wrapper">
                    <div className="movie-list">
                      {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)}
                    </div>
                </div>
            </div>
  )
}
