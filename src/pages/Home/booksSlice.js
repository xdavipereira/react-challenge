import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const selectAllBooks = state => state.books;

export const selectBookById =  (state, bookId) => state.books.books.find( book => book.id == bookId);


const initialState = {
    books: [],
    status: 'idle',
    error: null
  }


export const fetchBooks = createAsyncThunk('books/fetchBooks', async (searchObject) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?startIndex=${searchObject.startIndex}&printType=books&maxResults=5&q=${searchObject.query}`)
    return {
      items: response.data.items ? response.data.items  : [],
      queryParams: searchObject
    };
})
  

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      if(action.payload.queryParams.startIndex === 0) {
        state.books = [...action.payload.items];
      } else {
        state.books = state.books.concat(action.payload.items)
      }
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { getBooks } = booksSlice.actions

export default booksSlice.reducer


