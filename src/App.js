import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Footer from './Footer'
class App extends React.Component {
  render () {
    return(
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" >
            <Link to="/" activeStyle={{backgroundColor:'purple',color:'#a7a7a7'}} onlyActiveOnIndex={true}>Home</Link>
          </li>
          <li role="presentation" >
            <Link to="/profile" activeStyle={{backgroundColor:'pink',color:'white'}}>Profile</Link>
          </li>
          <li role="presentation" >
            <Link to="/messages" activeStyle={{backgroundColor:'pink',color:'purple'}}>Messages</Link>
          </li>
        </ul>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
export default App;
