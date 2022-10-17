import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    buy: {}
}

export const buysSlice = createSlice({
  name: 'buys',
  initialState,
  reducers: {
    setBuy: (state, action) => {
      state.buy = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { setBuy } = buysSlice.actions