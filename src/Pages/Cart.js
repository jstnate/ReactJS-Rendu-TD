import { useContext } from "react";
import CustomButton from "../Components/CustomButton";
import Header from "../Components/Header";
import { useCart } from "../Providers/CartProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <main>
      <Header />
      <h1>Cart</h1>
      <p>Number of items: {cart ? cart.length : 0}</p>
      {cart && cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <Link to={`/products/${item.id}/${item.title}`}>
                {item.title}
              </Link>
              <CustomButton
                text="Remove from cart"
                onClick={() => handleRemoveFromCart(item)}
              />
            </div>
          ))}
          <CustomButton text="Clear cart" onClick={handleClearCart} />
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
}

export default Cart;
