import React, { Component } from 'react';
import { render } from 'react-dom';

class GalleryItem extends Component {
  state = {
    click: false,
    likes: [],
  };
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
