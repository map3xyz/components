import '../src/index.css';
import '../src/storybook.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { configure } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  darkMode: true,
};

function loadStories () {
  document.body.className += ' ' + 'map3'
}

configure(loadStories, module)

