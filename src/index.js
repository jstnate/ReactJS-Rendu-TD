import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { CartProvider } from "./Providers/CartProvider";

import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products/:id/:name",
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
