import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';

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

const linkStyle = css`
  text-decoration: none;
  color: ${colors.black};
  font-weight: bold;
  padding: 5px 8px;
  &:hover,
  &:focus,
  &:active {
    color: ${colors.black};
    text-decoration: none;
  }
  &:hover {
    border-bottom: 4px solid ${colors.lightorange};
  }
`;

const activeLink = css`
  border-bottom: 4px solid ${colors.orange};
  &:hover {
    border-bottom: 4px solid ${colors.orange};
  }
`;

const Navbar = () => (
  <div style={{ headingStyle }}>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <NavLink
          exact
          activeClassName={activeLink}
          className={linkStyle}
          to="/"
        >
          About
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink
          activeClassName={activeLink}
          className={linkStyle}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li style={liStyle}>
        <NavLink activeClassName={activeLink} className={linkStyle} to="/faq">
          FAQ
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
