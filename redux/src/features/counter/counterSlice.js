import { createSlice } from '@reduxjs/toolkit' ;

const prakashKumar = {
  count: 100,
}

export const counterSlice = createSlice({
  name: 'counter by Geeky shows',
  initialState: prakashKumar,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 5
    },
    decrement: (state) => {
      state.count -= 10
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    divideByAmount: (state, action) => {
      state.count /= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, divideByAmount } = counterSlice.actions

export default counterSlice.reducer


