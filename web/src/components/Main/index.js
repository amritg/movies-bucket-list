import React from 'react'
import NowPlaying from '../NowPlaying'

class Main extends React.Component {
  constructor(props) {
    super(props)
    console.log('this(insideConstructor)', this)
    this.state = {
      activeTab: 'movies'
    }
    this.changeActiveTab = this.changeActiveTab.bind(this)
  }

  changeActiveTab(name) {
    return this.setState({
      activeTab: name
    })
  }
  
  render() {
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'row'}}>
          <h3 onClick={() => this.changeActiveTab('movies')} style={{paddingRight: '10px'}}>Movies</h3>
          <h3 onClick={() => this.changeActiveTab('tv')}>TV Series</h3>
        </div>
        <div style={{display: 'flex'}}>
          {this.state.activeTab === 'movies'
            ? <NowPlaying />
            :  <div>
              <p>TV series here</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Main