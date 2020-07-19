import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
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

  likeCount(event) {
    axios({
      method: 'PUT',
      url: `/gallery/like/:${event.target.id}`,
    }).then((response) => {
      this.getGalleryData();
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          galleryData={this.state.galleryList}
          likeCount={this.likeCount}
        />
      </div>
    );
  }
}

export default App;
