import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [openNavText, setOpenNavText] = useState(false);

  return (
    <MDBNavbar id="navBarHeader" expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'></MDBNavbarBrand>

       
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center'>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='mailto:info@sv-hetjongepaard.com?subject = Feedback&body = Message"' target="_blank">
              <MDBIcon color='light' far icon='envelope' />
              &nbsp; info@sv-hetjongepaard.com
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='https://api.whatsapp.com/send?phone=5978789084'target="_blank">
              <MDBIcon color='light' fab icon='whatsapp' />
              &nbsp; +5978789084
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink href='https://www.facebook.com/hetjongepaard/?locale=nl_NL' target="_blank">
                <MDBIcon color='light' fab icon='facebook-square'  /> 
                &nbsp; Find Us On Facebook
              </MDBNavbarLink> 
              </MDBNavbarItem>
          </MDBNavbarNav>
          
      </MDBContainer>
    </MDBNavbar>
  );
}