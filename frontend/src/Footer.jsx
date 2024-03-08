import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <MDBFooter className='text-center text-black'  style={{ backgroundColor: '#f1f1f1' }} >
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        <MDBNavbarLink href='https://www.facebook.com/hetjongepaard/?locale=nl_NL' target="_blank">
                <MDBIcon size='lg' color='dark' fab icon='facebook-square'  /> 
                &nbsp; Find Us On Facebook
              </MDBNavbarLink> 
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {year} Schaakvereniging Het Jonge Paard
      </div>
    </MDBFooter>
  );
}