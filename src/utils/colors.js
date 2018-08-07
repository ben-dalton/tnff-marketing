import * as tinycolor from 'tinycolor2';

const baseColors = {
  orange: '#EB6534',
  black: '#2B303A',
  green: '#0C7C59',
  blue: '#58A4B0',
  grey: '#BAC1B8',
};

const transform = (colors, label, method) => {
  const modColors = {};
  Object.keys(colors).forEach((k) => {
    modColors[`${label}${k}`] = tinycolor(colors[k])[method]().toString();
  });
  return modColors;
};

const lighten = colors => transform(colors, 'light', 'lighten');
const darken = colors => transform(colors, 'dark', 'darken');

export const colors = {
  ...baseColors,
  ...lighten(baseColors),
  ...darken(baseColors),
};
