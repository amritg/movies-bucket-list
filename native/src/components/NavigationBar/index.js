import React from 'react'
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'

import { connect } from 'react-redux'
import { toggleLeftNavigationDrawer } from '@amrit.gautam/reducers/lib/actions/actions'

const NavigationBar = (props) => {
  return (
    <Header style={{backgroundColor: '#00BCD4'}} iosBarStyle={'light-content'}>
      <Left style={{flex: 1}}>
        <Button
          transparent
          onPress={props.toggleLeftNavigationDrawer}
        >
          <Icon name={'menu'} ios={'ios-menu'} android={'md-menu'} style={{color: 'white'}}></Icon>
        </Button>
      </Left>
      <Body style={{flex: 2}}>
        <Title style={{color: 'white'}}>Movies Bucket List</Title>
      </Body>
      <Right style={{flex: 1}}>
        <Button transparent
        >
          <Icon name='search' style={{color: 'white'}}></Icon>
        </Button>
      </Right>
    </Header>
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
)(NavigationBar)
