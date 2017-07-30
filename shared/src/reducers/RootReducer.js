import { combineReducers } from 'redux'
import { search } from './search'
import { movieDetails } from './movieDetails'
import { MoviesReducer } from './MoviesReducer'
import { UtilsReducer } from './UtilsReducer'

export const RootReducer = combineReducers({
  search,
  movieDetails,
  moviesStore: MoviesReducer,
  utils: UtilsReducer
})
