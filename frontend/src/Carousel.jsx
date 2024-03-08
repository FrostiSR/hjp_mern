import React from 'react';
import bg1 from './assets/bg1.JPG'
import bg2 from './assets/bg2.JPG'
import bg3 from './assets/bg3.JPG'
import ImageOverlay from './ImageOverlay';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function App() {
  console.log(ImageOverlay);
  return (
    <MDBCarousel showControls showIndicators light fade>
      <MDBCarouselItem itemId={1}>
        <img src={bg3} className='d-block w-100' alt='...' />
        {ImageOverlay()}
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={bg2} className='d-block w-100' alt='...' />
        {ImageOverlay()}
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={bg1} className='d-block w-100' alt='...' />
        {ImageOverlay()}
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}