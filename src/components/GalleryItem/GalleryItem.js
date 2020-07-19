import React, { Component } from 'react';

let clickCount = 0;

class GalleryItem extends Component {
  state = {
    click: false,
    likes: [],
  };

  displayLikes() {
    clickCounter += 1;
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.path} alt={this.props.desc} />
      </div>
    );
  }
}

export default GalleryItem;
