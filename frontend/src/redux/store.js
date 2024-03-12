import { configureStore } from '@reduxjs/toolkit'
import userSlice from './api/userSlice'

export const store = configureStore({
  reducer: {
  userSlice
  },
})