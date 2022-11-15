import React from 'react'

export default function Movie({movie}) {

  return (
    <div className="movie-list-item">
      <img className="movie-list-item-image" src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
      <div className='movie-list-item-info'>
        <h1 className="movie-list-item-title">{movie?.title}</h1>
        <button className="movie-list-item-button">WATCH</button>
      </div>
    </div>
  )
}
