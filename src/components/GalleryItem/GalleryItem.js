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

         <img key={this.props.key} src={this.props.path} alt={this.props.desc}
          {this.props.likes}/>
        
      </div>
    );
  }
}

export default GalleryItem;
