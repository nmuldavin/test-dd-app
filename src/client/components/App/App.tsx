import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './App.css';

export const App = hot(module)(() => {
  return <div className={styles.app}>Test DD App</div>;
});
