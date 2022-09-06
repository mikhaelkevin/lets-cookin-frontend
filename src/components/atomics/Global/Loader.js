import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div className="lazyLoad">
      <Spinner animation="border" role="status" />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
