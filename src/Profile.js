import React, { PropTypes } from 'react';

import Pic from './contents/pic';

let Zhou = [
  {pic:'./src/images/1.jpg',title:'第一张',date:'2016-8-14',url:'a'},
  {pic:'./src/images/2.jpg',title:'第二张',date:'2016-8-15',url:'b'},
  {pic:'./src/images/3.jpg',title:'第三张',date:'2016-8-16',url:'c'},
  {pic:'./src/images/4.jpg',title:'第四张',date:'2016-8-17',url:'d'}
]
class Profile extends React.Component {
  render () {
    return(
      <div className="container-fluid">
        <div className="row">
          {Zhou.map((item,i) => <Pic {...item} key={i} />)}
        </div>
      </div>
    )
  }
}

export default Profile;
