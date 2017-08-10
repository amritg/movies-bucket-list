import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Spinner
} from 'native-base'
import { fetchPopular } from '@amrit.gautam/reducers/src/actions/actions'
import { connect } from 'react-redux'

import MovieCard from '../generic/MovieCard'

class Popular extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPopular()
  }

  render() {
    return(
      this.props.isFetching
        ? <Spinner color='#059CF6' style={{paddingTop: 100}}/>
        : <MovieCard movies={this.props.movies} dispatch={this.props.dispatch} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.moviesStore.isFetching,
    movies: state.moviesStore.popularMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => dispatch(fetchPopular()),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular)