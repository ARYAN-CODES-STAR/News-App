import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>Taaza Khabar</h2>
      <div className="row">
        <div className="col-md-4">
          <Newsitem title="myTitle" description="myone" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnSGmEJerJ5Wsi0y01slbS2HwNmxue82P2Ht0IZ_MFw&s"/>
        </div>
        <div className="col-md-4">
          <Newsitem title="myTitle" description="myone"/>
        </div>
        <div className="col-md-4">
          <Newsitem title="myTitle" description="myone"/>
        </div>
      </div>
   </div>
    )
  }
}

export default News;
