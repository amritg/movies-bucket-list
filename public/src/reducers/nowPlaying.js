import {
  REQUEST_NOW_PLAYING,
  RECEIVE_NOW_PLAYING
} from '../actions/actions'

export const nowPlaying = (state = {isFetching: false, movies: []}, action) => {
  switch (action.type) {
  case REQUEST_NOW_PLAYING:
    return Object.assign({}, state, { isFetching: true })
  case RECEIVE_NOW_PLAYING:
    return Object.assign({}, state, { isFetching: false, movies: action.movies })
  default:
    return state
  }
}
