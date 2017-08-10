import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Spinner
} from 'native-base'
import { fetchUpcoming } from '@amrit.gautam/reducers/src/actions/actions'
import { connect } from 'react-redux'

import MovieCard from '../generic/MovieCard'

class Upcoming extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUpcoming()
  }

  render() {
    return(
      this.props.isFetching
        ? <Spinner color='#059CF6' style={{paddingTop: 100}}/>
        : <MovieCard movies={this.props.movies} dispatch={this.props.dispatch}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.moviesStore.isFetching,
    movies: state.moviesStore.upComingMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpcoming: () => dispatch(fetchUpcoming()),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming)