import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { fetchNowPlaying, fetchPopular } from '@amrit.gautam/reducers/src/actions/actions'
import { connect } from 'react-redux'

class NowPlaying extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
     this.props.fetchNowPlaying()
  }

  render() {
    const list = this.props.movies.map((movie, index) => {
          return <Text key={index}>{movie.title}</Text>
        })
    return(
      this.props.isFetching
        ? <Text style={{paddingTop: 30}}>Loading ...</Text>
        : <View>{list}</View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.moviesStore.isFetching,
    movies: state.moviesStore.nowPlayingMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNowPlaying: () => dispatch(fetchNowPlaying()),
    fetchPopular: () => dispatch(fetchPopular())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying)