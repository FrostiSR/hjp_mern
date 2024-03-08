import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import useOnclickOutside from "react-cool-onclickoutside";


export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);
 
   const ref = useOnclickOutside(() => {
    setOpenBasic(false);
  });

  return (

    <MDBNavbar sticky expand='lg' light bgColor='light' ref={ref}>
      <MDBContainer fluid>
        <MDBNavbarBrand href=''>
        <img
              src= {logo}
              height='40'
              alt=''
              loading='lazy'
            /> Het Jonge Paard
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end gap-2'>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => setOpenBasic(false)} active aria-current='page' tag={Link} to='/'>
                 Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBNavbarLink tag={Link} to='/news'>Nieuws</MDBNavbarLink>
            </MDBNavbarItem> */}

            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => setOpenBasic(false)} tag={Link} to='/events'>Toernooien</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => setOpenBasic(false)} tag={Link} to='/our-team'>Clubleden</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => setOpenBasic(false)} tag={Link} to='/about'>Over Ons</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => setOpenBasic(false)} tag={Link} to='/contact'>Contact </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}