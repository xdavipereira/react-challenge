import { configureStore } from '@reduxjs/toolkit';

import booksReducer  from '../pages/Home/booksSlice';


export const store = configureStore({
  reducer: {
    books: booksReducer
  },
});
