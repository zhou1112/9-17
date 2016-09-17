import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
class Pic extends React.Component {
  handleClick(){
    let address = this.props.url;
    hashHistory.push(`/blog/${address}`)
  }
  render () {
    return(
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={this.props.pic} alt="..."/>
              <div className="caption">
                <h3>{this.props.title}</h3>
                <p>{this.props.date}</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button" onClick={this.handleClick.bind(this)}>Button</a>
                  <a href="#" className="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
    )
  }
}

Pic.defaultProps = {
  title:'第一张',
  pic:'./src/images/1.jpg',
  date:'2016-8-14'
}
export default Pic;
