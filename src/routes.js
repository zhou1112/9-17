import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './App';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import Blog from './Blog';


class Routers extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/blog/:title" component={Blog}/>
        </Route>
      </Router>
    )
  }
}
export default Routers;
