import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const galleryData = this.props.galleryData.map((item, index) => {
      return (
        <GalleryItem
          key={item.id}
          path={item.path}
          desc={item.description}
          likes={item.likes}
          likeCount={this.props.likeCount}
        />
      );
    });
    return <div>{galleryData}</div>;
  }
}
export default GalleryList;
