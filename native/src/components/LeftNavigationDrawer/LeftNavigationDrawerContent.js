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
import { Link, withRouter } from 'react-router-native'

const LeftNavigationDrawerContent = withRouter(({toggleLeftNavigationDrawer, history }) => {
  return (
    <Container style={{ flex: 1, backgroundColor: "#fff" }}>
      <List>
        <ListItem button noBorder
          onPress={() => {
            toggleLeftNavigationDrawer()
            history.push('/')
          }}
        >
          <Text>Now Playing</Text>
        </ListItem>
        <ListItem button noBorder
          onPress={ () => {
            toggleLeftNavigationDrawer()
            history.push('/upcoming')
          }}
        >
          <Text>Upcoming</Text>
        </ListItem>
        <ListItem button noBorder
          onPress={() => {
            toggleLeftNavigationDrawer()
            history.push('/popular')
          }}
        >
          <Text>Popular</Text>
        </ListItem>
      </List>
    </Container>
  )
})

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