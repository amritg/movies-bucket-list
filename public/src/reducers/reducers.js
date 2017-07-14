import {
  REQUEST_NOW_PLAYING,
  RECEIVE_NOW_PLAYING,
  REQUEST_UPCOMING,
  RECEIVE_UPCOMING,
  SET_CARD_WIDTH
} from '../actions/actions'

const getDefault = () => {
  if(window.innerWidth > 1500) return 'wide'
  if(window.innerWidth > 1250) return 'desktop'
  if(window.innerWidth > 600) return 'tablet'
  return 'mobile'
}

const initialState = {
  nowPlaying: [],
  upcoming: [],
  isFetching: false,
  cardWidth: getDefault()
}

export const nowPlaying = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_NOW_PLAYING:
    return Object.assign({}, state, { isFetching: true })
  case RECEIVE_NOW_PLAYING:
    return Object.assign({}, state, { isFetching: false, nowPlaying: action.movies })
  case SET_CARD_WIDTH:
    return Object.assign({}, state, { cardWidth: action.cardWidth })
  default:
    return state
  }
}

export const upcoming = (state = initialState, action) => {
  switch (action.type){
  case REQUEST_UPCOMING:
    return Object.assign({}, state, {isFetching: true})
  case RECEIVE_UPCOMING:
    return Object.assign({}, state, {isFetching: false, upcoming: action.movies})   
  default:
    return state
  }
}