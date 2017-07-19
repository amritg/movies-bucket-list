import React from 'react'

const MovieDetails = (props) => {
  console.log(props)
  return (
    <div>
      <p>More details of the movie here!</p>
      <p>{ props.match.params.id }</p>
    </div>
  )
}

export default MovieDetails
