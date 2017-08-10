import { TOGGLE_LEFT_NAVIGATION_DRAWER } from '../actions/actions'

export const UtilsReducer = (state = { leftNavigationDrawerStatus: false}, action) => {
  switch(action.type) {
  case TOGGLE_LEFT_NAVIGATION_DRAWER:
    if (action.force !== undefined) {
      return Object.assign({}, state, { leftNavigationDrawerStatus: action.force })      
    }

    return Object.assign({}, state, { leftNavigationDrawerStatus: !state.leftNavigationDrawerStatus })
  default:
    return state
  }
}