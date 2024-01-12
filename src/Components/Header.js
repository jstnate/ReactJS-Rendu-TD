import { useSelector, useDispatch } from "react-redux";
import { useCart } from "../Providers/CartProvider";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 80px;
  justify-content: space-between;
  align-items: center;
  background-color: #ee7f01;
`;

const StyledSpan = styled.span`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

function Header() {
  const { total } = useCart();

  return (
    <StyledHeader className="App-header">
      <StyledSpan>E-commerce</StyledSpan>
      <Link to="/cart" className="cart-icon-container" data-count={total}>
        <img src="cart-shopping-solid.svg"></img>
      </Link>
    </StyledHeader>
  );
}

export default Header;
