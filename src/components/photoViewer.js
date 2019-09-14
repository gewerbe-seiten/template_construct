import React, { Component } from "react"
import "./photoViewer.scss"

import img1 from "../images/projects/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg"
import img2 from "../images/projects/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg"
import img3 from "../images/projects/pixasquare-4ojhpgKpS68-unsplash.jpg"
import img4 from "../images/projects/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
import img5 from "../images/projects/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
import img6 from "../images/projects/lance-anderson-QdAAasrZhdk-unsplash.jpg"

class PhotoViewer extends Component {
  state = {}
  render() {
    return (
      <main className="photo-viewer w-100 mr-1 ml-1">
        <section className="img-view img-thumbnail mw-100 h-75">
          <img src={img5} alt="" />
        </section>
        <section className="img-list w-100 d-flex flex-wrap bg-light p-2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </section>
      </main>
    )
  }
}

export default PhotoViewer
