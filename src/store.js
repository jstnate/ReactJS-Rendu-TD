import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createSlice } from "@reduxjs/toolkit";

import { productAPI } from "./Services/API";

// const initialState = JSON.parse(localStorage.getItem("cart") || "[]");

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const nextState = [...state, action.payload];
//       localStorage.setItem("cart", JSON.stringify(nextState));
//       return nextState;
//       // console.log(localStorage.getItem("cart"));
//     },
//     removeFromCart: (state, action) => {
//       const nextState = state.filter((item) => item.id !== action.payload.id);
//       localStorage.setItem("cart", JSON.stringify(nextState));
//       return nextState;
//     },
//     clearCart: (state) => {
//       localStorage.setItem("cart", JSON.stringify([]));
//       return [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
    // cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

setupListeners(store.dispatch);
