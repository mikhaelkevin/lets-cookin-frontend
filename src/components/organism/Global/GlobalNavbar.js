import React from 'react';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import NavItemGroup from '../../moleculs/Navbar/NavItemGroup';
// import ProfileContext from '../../../pages/Context';

function GlobalNavbar() {
  // const userInformation = React.useContext(ProfileContext);
  return (
    <Navbar style={{ backgroundColor: '#fec107' }}>
      <Container fluid>
        <Nav>
          <NavItemGroup />
        </Nav>
        {/* <Row>
          <img
            className="nav-user-pic"
            src={userInformation?.profile_picture ? userInformation.profile_picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2IRUIqIOAKar3LaLJely1iMXS4HFfouBrg&usqp=CAU'}
            alt="user-pic"
          />
        </Row> */}
      </Container>
    </Navbar>
  );
}

export default GlobalNavbar;
