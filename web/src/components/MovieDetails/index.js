import React from 'react'
import { connect } from 'react-redux'

const MovieDetails = ({isFetching, movie}) => {
  return (
    isFetching 
      ? <p>Loading ...</p>
      : <div>
        <p>Movie Title: {movie.title || movie.name}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
  )
}

const mapStateToProps = (state) => {
  console.log('Movie Details state:', state)
  return {
    isFetching: state.movieDetails.isFetching,
    movie: state.movieDetails.movie
  }
}

export default connect(
  mapStateToProps
)(MovieDetails)
