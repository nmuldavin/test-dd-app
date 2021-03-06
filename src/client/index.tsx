import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

import './index.css';

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('root'));
