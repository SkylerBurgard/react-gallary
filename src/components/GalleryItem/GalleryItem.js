import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    hide: true,
  };

  componentDidMount() {
    this.props.likeCount();
  }

  toggleImg = () => {
    this.setState({
      hide: !this.state.hide,
    });
  };

  //   getGalleryData() {
  //     axios({
  //       method: 'GET',
  //       url: '/gallery',
  //     })
  //       .then((response) => {
  //         this.setState({
  //           galleryList: response.data,
  //         });
  //       })
  //       .catch((err) => {
  //         console.log('Error in GET:', err);
  //         alert('Error with GET server');
  //       });
  //   }

  render() {
    console.log(this.props);
    return (
      <div key={this.props.id}>
        <div onClick={this.toggleImg}>
          {this.state.hide ? (
            <img src={this.props.path} alt={this.props.desc} />
          ) : (
            <p>{this.props.desc}</p>
          )}
        </div>
        <div>
          <p>{this.props.likes} people like this</p>

          <button onClick={this.props.likeCount} id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default GalleryItem;
