import React from 'react';
import familyPicture from '../assets/family.png';
import { colors } from '../utils/colors';
import hennyHen from '../assets/lonesome-hen.png';

const circlePic = {
  borderRadius: '50% 50%',
  boxShadow: '-5px 5px 10px #ccc',
  border: `10px solid ${colors.black}`,
};

const About = () => (
  <div>
    <div style={{ width: '50%', float: 'left', padding: '50px 0' }}>
      <img
        src={familyPicture}
        alt="The Dalton Gang"
        style={{
          ...circlePic,
          maxWidth: '350px',
          width: '75%',
          margin: '20px auto',
          display: 'block',
        }}
      />
    </div>
    <div style={{ float: 'right', width: '50%', padding: '50px 50px 50px 0' }}>
      <p style={{ fontSize: '20px' }}>
        {`We are the Dalton family and we're glad to have you join us on this
        adventure of raising chickens, vegetables, and children.`}
      </p>
    </div>
    <div>
      <img
        src={hennyHen}
        alt="Henny Hen"
        style={{
          width: '30%',
          float: 'right',
          transform: 'scaleX(-1)',
        }}
      />
    </div>
  </div>
);

export default About;
