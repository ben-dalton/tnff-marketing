import { css } from 'emotion';

export const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  tallPhone: '(max-width: 360px) and (min-height: 740px)',
};

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  const newAcc = accumulator;
  const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
  const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
  newAcc[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return newAcc;
}, {});
