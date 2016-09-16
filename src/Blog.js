import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    return(
      <div>
        {
          this.props.params.title == 'a' ? '这是第一天':
          this.props.params.title == 'b' ? '这是第二天':
          this.props.params.title == 'c' ? '这是第三天':
          this.props.params.title == 'd' ? '这是第四天': '没有内容'
         }
      </div>
    )
  }
}

export default Blog;
