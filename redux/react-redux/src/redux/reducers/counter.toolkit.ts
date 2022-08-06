import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    increaseBy(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { increase, decrease, increaseBy } = counterSlice.actions;
export default counterSlice.reducer;
