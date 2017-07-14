import {
  REQUEST_UPCOMING,
  RECEIVE_UPCOMING,
} from '../actions/actions'

export const upcoming = (state = {isFetching: false, movies: []}, action) => {
  switch (action.type){
  case REQUEST_UPCOMING:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_UPCOMING:
    return Object.assign({}, state, {isFetching: false, movies: action.movies})   
  default:
    return state
  }
}