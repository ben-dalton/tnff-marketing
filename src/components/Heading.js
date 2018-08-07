import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../utils/colors';

const headingStyle = {
  textAlign: 'center',
  background: colors.lightgrey,
  margin: 0,
  padding: '25px',
};

const Heading = ({ text }) => <h1 style={headingStyle}>{text}</h1>;

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
