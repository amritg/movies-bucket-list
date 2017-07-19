import React from 'react'
import { AppBar } from 'material-ui'

const TopNavigationBar = (props) =>
  <AppBar
    title={'Movies Bucketlist'}
    onLeftIconButtonTouchTap={props.toggleLeftNavigationDrawer}
  />

export default TopNavigationBar
