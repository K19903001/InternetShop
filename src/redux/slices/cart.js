import { createSlice } from "@reduxjs/toolkit";
import { initialCartState } from "../initialValues";

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.find((el) => el.id === action.payload);
      if (productInCart) {
        productInCart.count++;
        return state;
      }
      state.push({
        id: action.payload,
        count: 1,
      });
      return state;
    },
    removeFromCart: (state, action) => {
      //   return action.payload;
    },
    removeAllCart: () => {
      return initialCartState;
    },
  },
});

export const { addToCart, removeFromCart, removeAllCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
