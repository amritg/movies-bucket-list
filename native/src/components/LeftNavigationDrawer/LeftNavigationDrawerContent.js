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

const LeftNavigationDrawerContent = (props) => {
  return (
    <Container style={{ flex: 1, backgroundColor: "#fff" }}>
      <List>
        <ListItem 
          button 
          noBorder
          onPress={() => props.toggleLeftNavigationDrawer()}
        >
          <Text>Now Playing</Text>
        </ListItem>
        <ListItem 
          button 
          noBorder
          onPress={() => props.toggleLeftNavigationDrawer()}
        >
          <Text>Upcoming</Text>
        </ListItem>
        <ListItem 
          button 
          noBorder
          onPress={() => props.toggleLeftNavigationDrawer()}
        >
          <Text>Popular</Text>
        </ListItem>
      </List>
    </Container>
  )
}

const mapStateToProps = (state) => {
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
)(LeftNavigationDrawerContent)