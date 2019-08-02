import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'MetricHPE, sans-serif',
      face: `
        @font-face {
          font-family: "MetricHPE";
          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
        }`,
    },
  },
});
