import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { cardGroupReducer } from '../features/cards/cardGroupSlice';
import { homeMenuReducer } from '../features/menu/homeMenuSlice';

export const store = configureStore({
  reducer: {
    cardGroup: cardGroupReducer,
    homeMenu: homeMenuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
