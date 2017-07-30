import { TOGGLE_LEFT_NAVIGATION_DRAWER } from '../actions/actions'

export const UtilsReducer = (state = { leftNavigationDrawerStatus: false}, action) => {
  switch(action.type) {
  case TOGGLE_LEFT_NAVIGATION_DRAWER:
    return Object.assign({}, state, { leftNavigationDrawerStatus: !state.leftNavigationDrawerStatus })
  default:
    return state
  }
}