import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { withRouter } from 'react-router-dom'

import { fetchSearch, fetchMovieDetails} from '@amrit.gautam/reducers/lib/actions/actions'

const SearchBar = withRouter(({fetchSearch, searchResults, history, fetchMovieDetails}) => {
  const moviesList = searchResults.map((movie) => ({
    text: movie.title || movie.name,
    movie: movie,
    value: (
      <MenuItem
        leftIcon={<img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} />}
        primaryText={movie.title || movie.name}
      />
    )
  })
  )

  return (
    <AutoComplete 
      floatingLabelText={'Search Movies, TV Shows'}
      dataSource={moviesList}
      onUpdateInput={(text) => {fetchSearch(text)}}
      fullWidth={true}
      filter={AutoComplete.noFilter}
      onNewRequest={
        (chosenRequest) => {
          fetchMovieDetails(chosenRequest.movie.id)
          history.push('/moviedetails/' + chosenRequest.movie.id)
        }
      }
    />
  )
})

const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults ? state.search.searchResults : []
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch:  (text) => { dispatch(fetchSearch(text)) },
    fetchMovieDetails: (movieId) => { dispatch(fetchMovieDetails(movieId)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
