import React from 'react';
import { colors } from '../utils/colors';

const footerStyle = {
  textAlign: 'center',
  background: colors.lightblack,
  margin: 0,
  padding: '25px',
  color: 'white',
};

const Footer = () => (
  <footer style={footerStyle}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">&copy; 2018 Dalton Development</div>
      </div>
    </div>
  </footer>
);

export default Footer;
