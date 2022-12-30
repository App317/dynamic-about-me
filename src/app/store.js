import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { peopleReducer } from '../features/people/peopleSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
