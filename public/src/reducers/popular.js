import {
  REQUEST_POPULAR,
  RECEIVE_POPULAR
} from '../actions/actions'

export const popular = (state = {isFetching: false, movies: []}, action) => {
  switch (action.type) {
  case REQUEST_POPULAR:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_POPULAR:
    return Object.assign({}, state, {isFetching: false, movies: action.movies})
  default:
    return state
  }
}