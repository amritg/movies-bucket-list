import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH,
  SET_SELECTED_MOVIE_DETAILS
} from '../actions/actions'

export const search = (state = { isFetching: false, searchResults: [], selectedMovieDetails: [] }, action) => {
  switch (action.type) {
  case REQUEST_SEARCH:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_SEARCH:
    return Object.assign({}, state, {isFetching: false, searchResults: action.searchResults})
  case SET_SELECTED_MOVIE_DETAILS:
    return Object.assign({}, state, { selectedMovieDetails: [action.movie] })
  default:
    return state
  }
} 