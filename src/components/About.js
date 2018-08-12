import React from 'react';
import { css } from 'emotion';

import familyPicture from '../assets/family.png';
import hennyHen from '../assets/lonesome-hen.png';
import { colors } from '../utils/colors';
import { mq } from '../utils/mediaQueries';

const circlePic = css`
  border-radius: 50% 50%;
  box-shadow: -5px 5px 10px #ccc;
  border: 10px solid ${colors.black};
  max-width: 350px;
  display: block;
  align-self: center;
  justify-self: center;
  width: 100%;
  margin: 25px;
  ${mq.large(css`
    width: 75%;
  `)};
`;

const gridContainer = css`
  display: grid;
  grid-template-columns: 100%;
  ${mq.medium(css`
    grid-template-columns: 30% 70%;
  `)};
`;

const description = css`
  font-size: 20px;
  ${mq.medium(css`
    margin-right: 30px;
  `)};
`;

const henny = css`
  width: 50%;
  transform: scaleX(-1);
  align-self: end;
  justify-self: center;
  ${mq.medium(css`
    justify-self: end;
  `)};
`;

const About = () => (
  <div className="container-fluid">
    <div className={gridContainer}>
      <img src={familyPicture} alt="The Dalton Gang" className={circlePic} />
      <div style={{ paddingTop: '30px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
          <div>
            <p className={description}>
              {`We are the Dalton family and we're glad to have you join us on this
        adventure of raising chickens, vegetables, and children.`}
            </p>
          </div>
          <img src={hennyHen} alt="Henny Hen" className={henny} />
        </div>
      </div>
    </div>
  </div>
);

export default About;
