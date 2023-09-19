import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
export const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const check = state.find((state) => state.id === action.payload.id);
      if (check) {
        check.quntity += 1;
      } else {
        const product = { ...action.payload, quntity: 1 };
        state.push(product);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload.id);
    },
    minsQuntity: (state, action) => {
      const check = state.find((state) => state.id === action.payload.id);
      if (check) {
        if (check.quntity > 0) {
          check.quntity -= 1;
        }
      }
    },
  },
});
export const { addToCart, deleteFromCart, minsQuntity } = cartSlice.actions;
export default cartSlice.reducer;
