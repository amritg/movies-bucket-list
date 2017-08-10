import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Button, Left, Body, Right, Thumbnail } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { toggleLeftNavigationDrawer } from '@amrit.gautam/reducers/lib/actions/actions'

const MovieCard = withRouter(({movies, location, history, dispatch}) => {
    const list = movies.map((movie, index) => {
      const imageURI = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path
      const croppedMovieOverview = movie.overview.length > 100 ? movie.overview.substring(0, 100) + 'See more ....' : movie.overview

      return (
        <Card key={index} style={{display: 'flex', flex: 0}}>
          <CardItem cardBody>
            <Image
              style={{
                resizeMode: "cover",
                width: null,
                height: 200,
                flex: 1
              }}
              source={{uri: imageURI}}
            />
          </CardItem>
          <CardItem button onPress={() => {
              dispatch(toggleLeftNavigationDrawer(null))
              history.push('/moviedetails')
              dispatch(toggleLeftNavigationDrawer(false))
            }
          }>
            <Body>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>{movie.title}</Text>
              <Text style={{fontSize: 13, paddingTop: 8}}>{croppedMovieOverview}</Text>
            </Body>
          </CardItem>
        </Card>
      )
    })
    return (
      <Container>
        <ScrollView>
          {list}
        </ScrollView>
      </Container>
    )
})

export default MovieCard