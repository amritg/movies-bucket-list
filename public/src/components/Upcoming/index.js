import React from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'react-grid-system'

import MovieCard from '../generic/MovieCard'

const Upcoming = ({ movies, isFetching }) => {
  const moviesList = movies.map((movie, index) => {
    return (
      <Col xs={12} md={6} className={'movie-card'} key={index}>
        <MovieCard movie={movie} />
      </Col>
    )
  })
  return (
    isFetching 
      ? <p>Loading ...</p> 
      : <Container className={'body'}>
        <Row>
          {moviesList}
        </Row>
      </Container>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.upcoming.isFetching,
    movies: state.upcoming.movies,
    cardWidth: state.cardWidth
  }
}

export default connect(
  mapStateToProps
)(Upcoming)
