import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Typography from '@material-ui/core/Typography';
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

const photos1 = [
  { src: pic1, width: 3, height: 3 },
  { src: pic2, width: 2, height: 3 },
  { src: pic3, width: 3, height: 4 },
  { src: pic4, width: 3, height: 4 },
];

const photos2= [
  { src: pic5, width: 3, height: 4 },
  { src: pic6, width: 1, height: 2 },
  { src: pic7, width: 2, height: 3 },
  { src: pic8, width: 2, height: 3 },
  { src: pic9, width: 3, height: 4 },
  { src: pic10, width: 3, height: 4 }
];

const typographyStyle = {
  margin: '40px'
};

class GalleryBoard extends Component {

  render() {
    return (
      <div>
        <Gallery photos={photos1} columns={2} />
        <Typography variant="h1" gutterBottom align="center">
          Happy Birthday Pabebe Girl! 💁🏻‍♀️
        </Typography>
        <Gallery photos={photos2} columns={2} />
        <Typography style={typographyStyle} variant="h6" gutterBottom align="justify">
          I might be the worst camera man ever when I take your pictures. But I am pretty sure
          I am good at taking your candid photos 😏You are more beautiful when I take candid photos of you
          and one of the reasons for that is it shows the true and raw you 😍 
          The great thing about this is I am just talking about the outside.
          You are as beautiful as well on the inside.
          Thus, this makes you the most beautiful pabebe ever 💁🏻‍♀️
          So lucky to have you in my life. 
          I hope that you have an awesome birthday and to have more birthdays with your one and only.
          I love you so much 👫.
        </Typography>
        <Typography style={typographyStyle} variant="h4" gutterBottom align="center" color="textSecondary">
          #TrueLoveWins - Amaro (2018)
        </Typography>
      </div>
    )
  }
}

export default GalleryBoard;
