import { combineReducers } from 'redux'
import { search } from './search'
import { movieDetails } from './movieDetails'
import { MoviesReducer } from './MoviesReducer'

const RootReducer = combineReducers({
  search,
  movieDetails,
  moviesStore: MoviesReducer
})

export default RootReducer
