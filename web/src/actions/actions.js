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

export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS'
export const RECEIVE_MOVIE_DETAILS = 'RECIVE_MOVIE_DETAILS'

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

export const requestSearch = () => {
  return {
    type: REQUEST_SEARCH
  }
}

export const receiveSearch = (searchResults) => {
  return {
    type: RECEIVE_SEARCH,
    searchResults: searchResults
  }
}

export const requestMoiveDetails = () => {
  return {
    type: REQUEST_MOVIE_DETAILS
  }
}

export const receiveMovieDetails = (movie) => {
  return {
    type: RECEIVE_MOVIE_DETAILS,
    movie: movie
  }
}

export const fetchNowPlaying = () => {
  return (dispatch) => {
    dispatch(requestNowPlaying())
    return fetch('/apitmdb/3/movie/now_playing?api_key=cec3df6eb60f82c18b233d13518045e9&region=FI')
      .then(response=> response.json())
      .then(nowPlaying => dispatch(receiveNowPlaying(nowPlaying.results)))
  }
}

export const fetchUpcoming = () => {
  return (dispatch) => {
    dispatch(requestUpcoming())
    return fetch('/apitmdb/3/movie/upcoming?api_key=cec3df6eb60f82c18b233d13518045e9&region=FI')
      .then(response => response.json())
      .then(upcoming => dispatch(receiveUpcoming(upcoming.results)))
  }
}

export const fetchPopular = () => {
  return (dispatch) => {
    dispatch(requestPopular())
    return fetch('/apitmdb/3/movie/popular?api_key=cec3df6eb60f82c18b233d13518045e9&region=FI')
      .then(response => response.json())
      .then(popular => dispatch(receivePopular(popular.results)))
  }
}

export const fetchSearch = (item) => {
  return (dispatch) => {
    dispatch(requestSearch())
    return fetch(`/apitmdb/3/search/multi?api_key=cec3df6eb60f82c18b233d13518045e9&r&language=en-US&query=${item}`)
      .then(response => response.json())
      .then(searchReasults => dispatch(receiveSearch(searchReasults.results)))
  }
}

export const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch(requestMoiveDetails())
    return fetch(`/apitmdb/3/movie/${movieId}?language=en-US&api_key=cec3df6eb60f82c18b233d13518045e9`)
      .then(response =>  response.json())
      .then(movie => dispatch(receiveMovieDetails(movie)))
  }
}