import React from 'react'
import { connect } from 'react-redux'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

const giveSize = (size) => {
  switch (size) {
  case 'wide': return '20%'
  case 'desktop': return '25%'
  case 'tablet': return '33%'
  default: return '50%'
  }
}

const MovieCard = ({ movies, cardWidth, isFetching }) => {
  const moviesList = movies.map((movie, index) => {
    return (
      <div key={index} style={{width: giveSize(cardWidth) }}>
        <Card>
          <CardMedia
          >
            <img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} />
          </CardMedia>
          <CardTitle title={movie.title}/>
          <CardText>
            {movie.overview}
          </CardText>
        </Card>
      </div>
    )
  })
  return (
    isFetching 
      ? <p>Loading ...</p> 
      : <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {moviesList}
      </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.popular.isFetching,
    movies: state.popular.movies,
    cardWidth: state.cardWidth
  }
}

const Popular = connect(
  mapStateToProps
)(MovieCard)

export default Popular
