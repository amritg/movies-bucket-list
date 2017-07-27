import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import { fetchNowPlaying, fetchPopular } from '@amrit.gautam/reducers/lib/actions/actions'
import { connect } from 'react-redux'


class Root extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
     // this.props.fetchNowPlaying()
     this.props.fetchPopular()
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
  console.log(state)
  return {
    isFetching: state.isFetching,
    movies: state.nowPlayingMovies
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
)(Root)