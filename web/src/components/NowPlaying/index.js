import React from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'react-grid-system'

import MovieCard from '../generic/MovieCard'
import { fetchNowPlaying } from '../../actions/actions'

require('./style.css')

class NowPlaying extends React.Component {
  
  componentDidMount() {
    this.props.fetchNowPlaying()
  }

  render() {
    const moviesList = this.props.movies.map((movie, index) => {
      return (
        <Col xs={12} md={6} className={'movie-card'} key={index}>
          <MovieCard movie={movie} />
        </Col>
      )
    })
    return (
      this.props.isFetching 
        ? <p>Loading ...</p> 
        : <Container className={'body'}>
          <Row>
            {moviesList}
          </Row>
        </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.moviesStore.isFetching,
    movies: state.moviesStore.nowPlayingMovies
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchNowPlaying: () => dispatch(fetchNowPlaying())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying)