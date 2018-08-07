import React from 'react';
import Wufoo from 'react-wufoo-embed';

const Contact = () => (
  <div style={{ clear: 'both' }}>
    <div style={{ fontSize: '18px', padding: '20px 0' }}>
      Let us know if you have any questions or comments. We would love to hear
      from you! from you!
    </div>
    <Wufoo userName="benadalton" formHash="z13ad5h30euecdx" header="hide" />
  </div>
);

export default Contact;
