import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from '../actions/actions'

export const search = (state = {isFetching: false, searchResults: []}, action) => {
  switch (action.type) {
  case REQUEST_SEARCH:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_SEARCH:
    return Object.assign({}, state, {isFetching: false, searchResults: action.searchResults})
  default:
    return state
  }
} 