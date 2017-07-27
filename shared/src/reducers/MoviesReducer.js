import {
  REQUEST_NOW_PLAYING,
  RECEIVE_NOW_PLAYING,
  REQUEST_POPULAR,
  RECEIVE_POPULAR,
  REQUEST_UPCOMING,
  RECEIVE_UPCOMING,
} from '../actions/actions'

const initialState = {
  isFetching: false,
  nowPlayingMovies: [],
  popularMovies: [],
  upComingMovies: []
}
export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_NOW_PLAYING:
    return Object.assign({}, state, { isFetching: true })
  case RECEIVE_NOW_PLAYING:
    return Object.assign({}, state, { isFetching: false, nowPlayingMovies: action.movies })
  case REQUEST_POPULAR:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_POPULAR:
    return Object.assign({}, state, {isFetching: false, popularMovies: action.movies})
  case REQUEST_UPCOMING:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_UPCOMING:
    return Object.assign({}, state, {isFetching: false, upComingMovies: action.movies})
  default:
    return state
  }
}
