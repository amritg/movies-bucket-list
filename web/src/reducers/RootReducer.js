import { combineReducers } from 'redux'
import { search } from '@amrit.gautam/reducers/lib/reducers/search'
import { movieDetails } from '@amrit.gautam/reducers/lib/reducers/movieDetails'
import { MoviesReducer } from '@amrit.gautam/reducers/lib/reducers/MoviesReducer'

const RootReducer = combineReducers({
  search,
  movieDetails,
  moviesStore: MoviesReducer
})

export default RootReducer
