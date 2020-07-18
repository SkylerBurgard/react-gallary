import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {
  state = {
    galleryItems: [{
      id: '',
      path:'',
      description: '',
      likes:'',

    }],
  };
  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      this.setState({});
    });
  }
  .catch((err) => {
    console.log('Error in GET:', err);
    alert('Error with GET server');
  });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p><GalleryList/></p>
        <img src="images/goat_small.jpg" />
      </div>
    )
  }
}

export default App;
