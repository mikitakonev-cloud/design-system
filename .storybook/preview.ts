import type { Preview } from '@storybook/react';
import '../src/tokens/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FEFBF6' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;
