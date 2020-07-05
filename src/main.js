import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'store/configure';
import App from './app';

class Main extends Component {
  render() {
    const onComplete = () => {
      console.log('[Rehydrate] Complete');
    };
    const {store} = configureStore(onComplete);
    this.store = store;

    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

export default Main;
