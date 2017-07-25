import React from 'react'
import { Row, Col } from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'
import EditorFormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchMovieDetails } from '../../../actions/actions'
require('./style.css')

const MovieCard = withRouter(({ movie, fetchMovieDetails, history }) => {
  const croppedMovieOverview = movie.overview.length > 200 ? movie.overview.substring(0, 200) + ' ....' : movie.overview
  
  return (
    <Row>
      <Col xs={5} md={5}>
        <img src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} style={{width: '100%'}}/>
      </Col>
      <Col xs={7} md={7}>
        <h1 className={'movie-title'}>{movie.title}</h1>
        <p>{croppedMovieOverview}</p>
        <RaisedButton 
          label="Info"
          labelPosition="after"
          primary={true}
          icon={<EditorFormatListBulleted />}
          onTouchTap={() => {
            fetchMovieDetails(movie.id)
            history.push('/moviedetails/' + movie.id)
          }}
        />
        <RaisedButton 
          label="Bucket"
          secondary={true}
          icon={<ContentAddCircle />}
          className={'button'}
        />
      </Col>
    </Row>
  )
})

const mapStateToProps = (state) => {
  return {
    state
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (movieId) => dispatch(fetchMovieDetails(movieId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard)
