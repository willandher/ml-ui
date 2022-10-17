import { configureStore } from '@reduxjs/toolkit'
import {  userApi } from './api'
import { buysSlice } from './slices/buys/buysSlices'

export const store = configureStore({
  reducer: {
    buys: buysSlice.reducer,
      [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat( userApi.middleware )
})