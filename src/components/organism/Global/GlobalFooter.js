import React from 'react';
import { Stack } from 'react-bootstrap';
import FooterItem from '../../atomics/Global/FooterItem';

function GlobalFooter() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        position: 'relative',
        bottom: '0',
        width: '100%',
        height: '50px',
        backgroundColor: '#fec107',
        fontFamily: 'Inter',
      }}
    >
      <Stack direction="horizontal" className="gap-3 gap-md-5">
        <FooterItem text="Product" />
        <FooterItem text="Company" />
        <FooterItem text="Learn More" />
        <FooterItem text="Get in touch" />
      </Stack>
    </div>
  );
}

export default GlobalFooter;
