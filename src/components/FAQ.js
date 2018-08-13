import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import { content } from '../data/faq';
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
      <br />
      <Accordion>
        {content.questions.map((question, idx) => (
          <AccordionItem expanded={idx === 0} key={idx}>
            <AccordionItemTitle>
              <h6 className="u-position-relative u-margin-bottom-s">
                {question.q}
                <div className="accordion__arrow" role="presentation" />
              </h6>
            </AccordionItemTitle>
            <AccordionItemBody>
              {question.a.map((a, i) => <p key={i}>{a}</p>)}
            </AccordionItemBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default FAQ;
