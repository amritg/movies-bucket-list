import { REQUEST_MOVIE_DETAILS, RECEIVE_MOVIE_DETAILS} from '../actions/actions'

export const movieDetails = (state = {movie: {}, isFetching: false}, action) => {
  switch (action.type) {
  case REQUEST_MOVIE_DETAILS:
    return Object.assign({}, state,  {isFetching: true})
  case RECEIVE_MOVIE_DETAILS:
    return Object.assign({}, state, {movie: action.movie, isFetching: false})
  default:
    return state
  }
}
