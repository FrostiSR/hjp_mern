import React from 'react';import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

  return (
    <div>
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('./assets/bg2.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgb(0 25 65 / 57%)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Toernooien</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className='d-flex flex-row flex-wrap justify-content-center p-3 gap-3'>
    <MDBCard>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
    </div>
  );
}