import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import game from './reducers';

export const rootReducer = combineReducers({
  game
});

export default configureStore({ reducer: rootReducer });
