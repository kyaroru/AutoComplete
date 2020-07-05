import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import sagas from 'sagas';

let middlewares;
let store;
const sagaMiddleware = createSagaMiddleware();

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // to whitelist items that needed to be persist
};

const reducer = persistCombineReducers(config, reducers);

/* global __DEV__ */
if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares = applyMiddleware(sagaMiddleware, logger);
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

export const getStore = () => store;

const configureStore = (onComplete) => {
  store = createStore(reducer, middlewares);
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store, null, onComplete);
  return {persistor, store};
};

export default configureStore;
