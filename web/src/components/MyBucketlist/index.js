import React from 'react'
import { Tabs, Tab } from 'material-ui'

const MyBucketList = () =>
  <div>
    <Tabs>
      <Tab 
        label={'Movies'}
      >
        <h4>Some BucketListed Movies here ....</h4>
        <p>This is Movies Tab.</p>
      </Tab>
      <Tab label="Tv Series" >
        <div>
          <h4>Some BucketListed TV Series here ....</h4>
          <p>This is TV Series tab.</p>
        </div>
      </Tab>
    </Tabs>
  </div>

export default MyBucketList
