import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from '../../atomics/Global/NavItem';

function NavItemGroup() {
  return (
    <Nav>
      <NavItem menuName="Home" />
      <NavItem endPoint="add-recipe" menuName="Add Recipe" />
      <NavItem endPoint="profile" menuName="Profile" />
    </Nav>
  );
}

export default NavItemGroup;
