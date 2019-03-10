import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import pic1 from '../../assets/1.jpeg';
import pic2 from '../../assets/2.jpeg';
import pic3 from '../../assets/3.jpeg';
import pic4 from '../../assets/4.jpeg';
import pic5 from '../../assets/5.jpeg';
import pic6 from '../../assets/6.jpeg';
import pic7 from '../../assets/7.jpeg';
import pic8 from '../../assets/8.jpeg';
import pic9 from '../../assets/9.jpeg';
import pic10 from '../../assets/10.jpeg';

const photos = [
  { src: pic1, width: 2, height: 2 },
  { src: pic2, width: 1, height: 2 },
  { src: pic3, width: 3, height: 4 },
  { src: pic4, width: 3, height: 4 },
  { src: pic5, width: 3, height: 4 },
  { src: pic6, width: 1, height: 2 },
  { src: pic7, width: 1, height: 2 },
  { src: pic8, width: 3, height: 4 },
  { src: pic9, width: 3, height: 4 },
  { src: pic10, width: 3, height: 4 }
];

class GalleryBoard extends Component {
  render() {
    return (
      <div>
        <Gallery photos={photos} columns={2} />
      </div>
    )
  }
}

export default GalleryBoard;
