import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../Components/CustomButton";
import { useCart } from "../Providers/CartProvider";
import styled from "styled-components";

const StyledThumbnail = styled.img`
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const StyledCartList = styled.div`
  padding: 20px 80px;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
  padding: 20px 0;
`;

const StyledItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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

function ProductList(props) {
  const { cart, addToCart, removeFromCart } = useCart();
  console.log(cart);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  return (
    <StyledCartList>
      {props.data.map((product) => {
        return (
          <StyledItem key={product.id}>
            <StyledItemDetails>
              <StyledThumbnail src={product.image} alt={product.title} />
              <h3>
                <StyledLink to={`/products/${product.id}/${product.title}`}>
                  {product.title}
                </StyledLink>
              </h3>
            </StyledItemDetails>
            <StyledItemActions>
              <CustomButton
                text="Add to cart"
                onClick={() => handleAddToCart(product)}
              />
              <CustomButton
                text="Remove from cart"
                onClick={() => handleRemoveFromCart(product)}
              />
            </StyledItemActions>
          </StyledItem>
        );
      })}
    </StyledCartList>
  );
}

export default ProductList;
