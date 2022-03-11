import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './App/navigation';
import {store} from './App/redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
