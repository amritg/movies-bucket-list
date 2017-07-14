import fetch from 'isomorphic-fetch'
/**
 * Action Types
 */

export const REQUEST_NOW_PLAYING = 'REQUEST_NOW_PLAYING'
export const RECEIVE_NOW_PLAYING = 'RECEIVE_NOW_PLAYING'
export const REQUEST_UPCOMING = 'REQUEST_UPCOMING'
export const RECEIVE_UPCOMING = 'RECEIVE_UPCOMING'
export const REQUEST_POPULAR = 'REQUEST_POPULAR'
export const RECEIVE_POPULAR = 'RECEIVE_POPULAR'

export const SET_CARD_WIDTH = 'SET_CARD_WIDTH'

/**
 * Action Creators
 */

export const requestNowPlaying = () => {
  return {
    type: REQUEST_NOW_PLAYING
  }
}

export const receiveNowPlaying = (movies) => {
  return {
    type: RECEIVE_NOW_PLAYING,
    movies: movies
  }
}

export const requestUpcoming = () => {
  return {
    type: REQUEST_UPCOMING
  }
}

export const receiveUpcoming = (movies) => {
  return {
    type: RECEIVE_UPCOMING,
    movies: movies
  }
}
export const requestPopular = () => {
  return {
    type: REQUEST_POPULAR
  }
}

export const receivePopular = (movies) => {
  return {
    type: RECEIVE_POPULAR,
    movies: movies
  }
}

export const setCardWidth = (cardWidth) => {
  return {
    type: SET_CARD_WIDTH,
    cardWidth: cardWidth
  }
}

export const fetchNowPlaying = () => {
  return (dispatch) => {
    dispatch(requestNowPlaying())
    return fetch('/apitmdb/3/movie/now_playing?api_key=cec3df6eb60f82c18b233d13518045e9&language=en-US&page=1')
      .then(response=> response.json())
      .then(nowPlaying => dispatch(receiveNowPlaying(nowPlaying.results)))
  }
}

export const fetchUpcoming = () => {
  return (dispatch) => {
    dispatch(requestUpcoming())
    return fetch('/apitmdb/3/movie/upcoming?api_key=cec3df6eb60f82c18b233d13518045e9&language=en-US&page=1')
      .then(response => response.json())
      .then(upcoming => dispatch(receiveUpcoming(upcoming.results)))
  }
}

export const fetchPopular = () => {
  return (dispatch) => {
    dispatch(requestPopular())
    return fetch('/apitmdb/3/movie/popular?api_key=cec3df6eb60f82c18b233d13518045e9&language=en-US&page=1')
      .then(response => response.json())
      .then(popular => dispatch(receivePopular(popular.results)))
  }
}