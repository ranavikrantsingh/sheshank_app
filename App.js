import React from 'react';
import Routes from './src/routes/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Routes />
    </GestureHandlerRootView>
  );
};

export default App;

