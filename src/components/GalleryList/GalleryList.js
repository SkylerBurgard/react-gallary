import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import { render } from 'react-dom';
import axios from 'axios';

class GalleryList extends Component {
  state = {
    galleryList: [],
  };

  componentDidMount() {
    this.getGalleryData();
  }

  getGalleryData() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => {
        console.log('Error in GET:', err);
        alert('Error with GET server');
      });
  }
  render() {
    //map over my info from server (gallerylist)
    //map returns response.data?
    const galleryData = this.state.galleryList.map((item, index) => {
      return (
        <GalleryItem
          key={item.id}
          path={item.path}
          desc={item.description}
          likes={item.likes}
        />
      );
    });
    return <div>{galleryData}</div>;
  }
}
export default GalleryList;
