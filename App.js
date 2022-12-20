import React from 'react';
import Routes from './src/routes/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/appStore';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Routes />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
