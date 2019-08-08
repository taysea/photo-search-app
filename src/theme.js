import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      focus: 'accent-4',
    },
    font: {
      family: "'Graphik', sans-serif",
      face: "@font-face {\nfont-family: 'Graphik';\nsrc: url('/fonts/Graphik.woff') format('woff');\n}\n",
    },
  },
});
