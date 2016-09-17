import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
class Home extends React.Component {
  handleClick(){
    hashHistory.push('profile')
  }
  render () {
    return(
      <div className="jumbotron">
        <h1>宙宙</h1>
        <p>this is conter from zhouhzou</p>
        <p><a className="btn btn-primary btn-lg" role="button" onClick={this.handleClick.bind(this)}>this is joke</a></p>
      </div>
    )
  }
}

export default Home;
