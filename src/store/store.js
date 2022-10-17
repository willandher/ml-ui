import { configureStore } from '@reduxjs/toolkit'
import {  userApi } from './api'
import { transactionApi } from './api/transactions/transactionApi'
import { buysSlice } from './slices/buys/buysSlices'

export const store = configureStore({
  reducer: {
    buys: buysSlice.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat( userApi.middleware )
})