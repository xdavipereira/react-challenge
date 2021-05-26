import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const selectAllBooks = state => state.books;

export const selectBookById =  (state, bookId) => state.books.books.find( book => book.id == bookId);


const initialState = {
    books: [],
    favorites: [],
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
    addToFavorite(state, action) {

      const existingBook = state.books.find(item => item.id === action.payload.id);

      if(existingBook) {
        existingBook.starred = true
      }


      state.favorites.push({...existingBook});

    },
    removeFromFavorite(state, action) {

      const existingBook = state.books.find(item => item.id === action.payload.id);

      if(existingBook) {
        existingBook.starred = false
      }

      const indexFavorites = state.favorites.findIndex(item => item.id === action.payload.id);
      
      state.favorites = [...state.favorites.slice(0, indexFavorites), ...state.favorites.slice(indexFavorites + 1)]



    }

    
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

export const { addToFavorite, removeFromFavorite } = booksSlice.actions

export default booksSlice.reducer


