import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { endPoint, menuName } = props;
  return (
    <Navbar.Brand className="d-flex justify-content-start mx-3 mx-md-5 ">
      <Link to={'/'.concat(endPoint)} style={{ color: 'white', textDecoration: 'none' }} className="nav-menu">{menuName}</Link>
    </Navbar.Brand>
  );
}

NavItem.propTypes = {
  endPoint: PropTypes.string,
  menuName: PropTypes.string,
};

NavItem.defaultProps = {
  menuName: 'Unknown Menu',
  endPoint: '#',
};
export default NavItem;
