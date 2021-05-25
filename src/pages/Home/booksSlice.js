import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    books: [],
    status: 'idle',
    error: null
  }


export const fetchBooks = createAsyncThunk('books/fetchBooks', async (query) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?startIndex=0&printType=books&maxResults=5&q=${query}`)
    return response.data.items;
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
      state.books = state.books.concat(action.payload)
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { getBooks } = booksSlice.actions

export default booksSlice.reducer


export const selectAllBooks = state => state.books;
