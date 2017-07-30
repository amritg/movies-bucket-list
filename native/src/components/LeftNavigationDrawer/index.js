import React from 'react'
import {
  Text,
  View
} from 'react-native'
import {
  Drawer,
  Container,
  List,
  ListItem,
  Button
} from 'native-base'
import { connect } from 'react-redux'

import { toggleLeftNavigationDrawer } from '@amrit.gautam/reducers/lib/actions/actions'
import  LeftNavigationDrawerContent from './LeftNavigationDrawerContent'

const LeftNavigationDrawer = (props) => {
  return (
    <Drawer
      type={'displace'}
      content={<LeftNavigationDrawerContent />}
      open={props.leftNavigationDrawerStatus}
      onClose={() => { if (props.leftNavigationDrawerStatus === true) props.toggleLeftNavigationDrawer() }}
    >
      {props.children}
    </Drawer>
  )
}

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