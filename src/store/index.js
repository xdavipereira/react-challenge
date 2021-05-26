import { configureStore } from '@reduxjs/toolkit';

import booksReducer  from '../reducers/booksSlice';
import queryReducer  from '../reducers/querySlice';


export const store = configureStore({
  reducer: {
    books: booksReducer,
    query: queryReducer
  },
});
