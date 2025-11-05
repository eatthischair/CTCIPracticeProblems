import React from 'react';
import {UserProvider} from '../UserContext'; // Path to your UserContext
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import App from './app';

const Main = () => {
  return (
    <UserProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <App />
      </GestureHandlerRootView>
    </UserProvider>
  );
};

export default Main;
