import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <p>this is a news component</p>
        <Newsitem title="myTitle" description="hey one"/>
      </div>
    )
  }
}

export default News
