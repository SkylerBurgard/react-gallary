import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Axios from 'axios';

class App extends Component {
  state = {
    galleryList: [],
  };

  compoenentDidMount() {
    this.getGalleryList();
  }
  getGalleryList() {
    Axios.get('/gallery').then((response) => {
      this.setState({
        galleryList: response.data,
      })
    })
  }
  
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList />
      </div>
    );
  }
}

export default App;
