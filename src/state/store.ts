import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import game from './reducers';

export const rootReducer = combineReducers({
  game
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({ reducer: rootReducer });
