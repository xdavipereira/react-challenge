import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const selectBookmarks = state => state.bookmarks;

const initialState = {
    bookmarks: [],
  }
  

const bookmarksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookmark(state, action) {

      state.bookmarks.push(action.payload)
    }
  }
})

export const { addBookmark } = bookmarksSlice.actions

export default bookmarksSlice.reducer


