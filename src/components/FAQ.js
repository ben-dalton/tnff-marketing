import React from 'react';
import egg from '../assets/egg.png';

const eggStyle = {
  width: '50%',
  position: 'relative',
  padding: '0 20px',
  left: '-20px',
  height: 'auto',
  minWidth: '150px',
  maxWidth: '300px',
  float: 'left',
  marginRight: '2rem',
};

const FAQ = () => (
  <div style={{ marginTop: '30px', clear: 'both' }}>
    <div style={{ fontSize: '18px', padding: '20px 0' }}>
      <img className="faqCurve" alt="egg" src={egg} style={eggStyle} />
      <h1>Frequently Asked Questions</h1>
      <p style={{ padding: '20px' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat
        cupiditate rerum soluta, optio alias ad mollitia similique harum ipsam
        labore odit, deserunt quod sequi maxime ab quas, obcaecati praesentium?
      </p>
    </div>
  </div>
);

export default FAQ;
