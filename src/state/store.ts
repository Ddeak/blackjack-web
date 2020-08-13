import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { players, deck } from './reducers';

export const rootReducer = combineReducers({
  players,
  deck
});

export default configureStore({ reducer: rootReducer });
