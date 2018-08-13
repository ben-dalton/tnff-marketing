import React from 'react';
import { css } from 'emotion';
import { colors } from '../utils/colors';

const footerStyle = css`
  text-align: center;
  background: ${colors.lightblack};
  margin: 0;
  padding: 25px;
  color: white;
`;

const link = css`
  color: white;
  text-decoration: none;
  &:focus,
  &:active {
    color: white;
  }
  &:hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const year = () => {
  const d = new Date();
  return d.getFullYear();
};

const Footer = () => (
  <footer className={footerStyle}>
    <a
      className={link}
      href="http://www.daltondevelopment.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      &copy; {year()} Dalton Development
    </a>
  </footer>
);

export default Footer;
