import {SafeAreaView} from 'react-native';
import React from 'react';
import {Layout} from '@/themes/variables';
import StackRoutes from '@/routes/stack/stack';
import {Provider} from 'react-redux';
import {persistor, store} from '@/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={[Layout.fill]}>
            <StackRoutes />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
