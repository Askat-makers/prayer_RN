import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AuthReducer, ColumnReducer} from './reducers';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  AuthReducer,
  ColumnReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
