import React from 'react';
import axios from 'axios';

class  Messages extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/newming')
    .then((res) => {
      console.log(res);
      this.setState({
        data:res.data,
        wait:false
      })
    })
    .catch(function (error) {
      alert(error);
    });
  }
  render () {
    return(
        <div>
          {
            this.state.wait ? '正在获取数据':
            <img src={this.state.data.avatar_urll} />
          }
        </div>
    )
  }
}

export default Messages ;
