import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { cardGroupReducer } from '../features/cards/cardGroupSlice';

export const store = configureStore({
  reducer: {
    cardGroup: cardGroupReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
