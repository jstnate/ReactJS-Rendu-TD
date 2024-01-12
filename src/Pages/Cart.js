import { useContext } from "react";
import CustomButton from "../Components/CustomButton";
import Header from "../Components/Header";
import { useCart } from "../Providers/CartProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTitle = styled.h1`
  width: 100%;
  padding: 20px 80px 0;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
  padding: 20px 0;
`;

const StyledCartList = styled.div`
  padding: 20px 0;
`;

const StyledThumbnail = styled.img`
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const StyledLink = styled(Link)`
  color: #ee7f01;
  text-decoration: none;
  gap: 20px;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

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
      <StyledTitle>Cart</StyledTitle>
      {cart && cart.length > 0 ? (
        <div style={{ padding: "20px 80px" }}>
          <CustomButton text="Clear cart" onClick={handleClearCart} />
          <StyledCartList>
            {cart.map((item) => (
              <StyledItem key={item.id}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <StyledThumbnail src={item.image} alt={item.title} />
                  <StyledLink to={`/products/${item.id}/${item.title}`}>
                    {item.title}
                  </StyledLink>
                </div>
                <CustomButton
                  text="Remove from cart"
                  onClick={() => handleRemoveFromCart(item)}
                />
              </StyledItem>
            ))}
          </StyledCartList>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
}

export default Cart;
