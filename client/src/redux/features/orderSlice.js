import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
