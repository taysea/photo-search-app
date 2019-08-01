import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Euclid, sans-serif',
      face: `
        @font-face {
          font-family: "Euclid";
          src: url("/src/fonts/Euclid.otf") format('otf');
        }`,
    },
  },
});
