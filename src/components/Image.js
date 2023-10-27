import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import photo1 from '../images/Photos/1.png';
import photo2 from '../images/Photos/2.png';
import photo3 from '../images/Photos/3.png';
import photo4 from '../images/Photos/4.jpg';
import photo5 from '../images/Photos/5.jpg';
import photo6 from '../images/Photos/6.jpg';
import photo7 from '../images/Photos/7.jpg';
import photo8 from '../images/Photos/8.jpg';
import photo10 from '../images/Photos/10.jpeg';
import photo11 from '../images/Photos/11.jpeg';
import photo12 from '../images/Photos/12.jpg';
import photo13 from '../images/Photos/13.jpg';
import photo14 from '../images/Photos/14.jpg';
import photo15 from '../images/Photos/15.jpg';
import photo16 from '../images/Photos/16.jpg';
import photo17 from '../images/Photos/17.jpg';
import photo18 from '../images/Photos/18.jpg';
import photo19 from '../images/Photos/19.jpg';
import photo20 from '../images/Photos/20.jpg';
import photo21 from '../images/Photos/21.jpg';
import photo22 from '../images/Photos/22.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Image = () => {
  return (
    <ImageList
      className='mt-10 '
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img 
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: photo1,
    title: '1',
    rows: 3,
    cols: 2,
  },
  {
    img: photo8,
    title: '8',
    rows: 3,
    cols: 1,
  },
  {
    img: photo4,
    title: '4',
    rows: 5,
    cols: 1,
  },
  {
    img: photo19,
    title: '19',
    rows: 3,
    cols: 1,
  },
  {
    img: photo15,
    title: '15',
    rows: 4,
    cols: 2,
  },
  {
    img: photo6,
    title: '6',
    rows: '2',
  },
  {
    img: photo7,
    title: '7',
    rows: '3',
  },
  {
    img: photo11,
    title: '11',
    rows: '2',
    cols:'1',
  },
  {
    img: photo2,
    title: '2 ',
    rows: 3,
    cols: 2,
  },
  
  {
    img: photo10,
    title: '10',
    rows: 4,
    cols: 2,
  },
  
  {
    img: photo3,
    title: 'Burger',
    rows: 3,
    cols: 2,
  },
 
  

 
];

export default Image;