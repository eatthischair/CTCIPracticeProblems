import React from 'react';
import {UserProvider} from '../UserContext'; // Path to your UserContext

import App from './app';

const Main = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default Main;
