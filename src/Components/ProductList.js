import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../Components/CustomButton";
import { useCart } from "../Providers/CartProvider";

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
    <div>
      {props.data.map((product) => {
        return (
          <div key={product.id}>
            <div>
              <h3>
                <Link to={`/products/${product.id}/${product.title}`}>
                  {product.title}
                </Link>
              </h3>
              <img src={product.image} alt={product.title} />
            </div>
            <div>
              <CustomButton
                text="Add to cart"
                onClick={() => handleAddToCart(product)}
              />
              <CustomButton
                text="Remove from cart"
                onClick={() => handleRemoveFromCart(product)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
