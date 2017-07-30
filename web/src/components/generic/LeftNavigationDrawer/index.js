import React from 'react'
import { Drawer, MenuItem } from 'material-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { toggleLeftNavigationDrawer } from '@amrit.gautam/reducers/lib/actions/actions'

const LeftNavigationDrawer = (props) => 
  <Drawer
    open={props.leftNavigationDrawerStatus}
    containerStyle={{top: '64px', left:'auto'}}
  >
    <Link to='/nowplaying'><MenuItem onTouchTap={props.toggleLeftNavigationDrawer}>Now Playing</MenuItem></Link>
    <Link to='/upcoming'><MenuItem onTouchTap={props.toggleLeftNavigationDrawer}>Upcoming</MenuItem></Link>
    <Link to='/popular'><MenuItem onTouchTap={props.toggleLeftNavigationDrawer}>Popular</MenuItem></Link>
    <Link to='/mybucketlist'><MenuItem onTouchTap={props.toggleLeftNavigationDrawer}>My Bucket List</MenuItem></Link>
  </Drawer>

const mapStateToProps = (state) => {
  return {
    leftNavigationDrawerStatus: state.utils.leftNavigationDrawerStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftNavigationDrawer: () => dispatch(toggleLeftNavigationDrawer())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavigationDrawer)
