import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Navigator from './src/Navigator';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Navigator />
      </Provider>
    );
  }
}
