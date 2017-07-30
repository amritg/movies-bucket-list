import React from 'react'
import { AppBar } from 'material-ui'
import { connect } from 'react-redux'

import { toggleLeftNavigationDrawer } from '@amrit.gautam/reducers/lib/actions/actions'

const TopNavigationBar = (props) =>
  <AppBar
    title={'Movies Bucketlist'}
    onLeftIconButtonTouchTap={props.toggleLeftNavigationDrawer}
  />

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftNavigationDrawer: () => dispatch(toggleLeftNavigationDrawer())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavigationBar)
