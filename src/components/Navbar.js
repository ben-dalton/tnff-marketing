import React from 'react';
import { Link } from 'react-router-dom';

import { colors } from '../utils/colors';

const headingStyle = {
  textAlign: 'center',
  background: colors.lightgrey,
  margin: 0,
  padding: '25px',
};

const ulStyle = {
  textAlign: 'center',
  listStyle: 'none',
  fontFamily: "'Josefin Slab', serif",
  background: colors.lightgrey,
  margin: 0,
};

const liStyle = {
  display: 'inline-block',
  padding: '20px',
  fontSize: '32px',
};

const linkStyle = {
  textDecoration: 'none',
  color: colors.black,
  fontWeight: 'bold',
};

const Navbar = () => (
  <div style={{ headingStyle }}>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <Link style={linkStyle} to="/">
          About
        </Link>
      </li>
      <li style={liStyle}>
        <Link style={linkStyle} to="/contact">
          Contact
        </Link>
      </li>
      <li style={liStyle}>
        <Link style={linkStyle} to="/faq">
          FAQ
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
