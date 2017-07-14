import React from 'react'
import { Drawer, MenuItem } from 'material-ui'
import { Link } from 'react-router-dom'

const LeftNavigationDrawer = (props) => 
  <Drawer
    open={props.open}
    containerStyle={{top: '65px', left:'auto'}}
  >
    <Link to='/'><MenuItem>Now Playing</MenuItem></Link>
    <Link to='/upcoming'><MenuItem>Upcoming</MenuItem></Link>
    <Link to='/popular'><MenuItem>Popular</MenuItem></Link>
    <Link to='/mybucketlist'><MenuItem>My Bucket List</MenuItem></Link>
  </Drawer>

export default LeftNavigationDrawer
