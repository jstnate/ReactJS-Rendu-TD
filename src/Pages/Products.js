import ProductList from "../Components/ProductList";
import { useGetProductsQuery } from "../Services/API";
import Header from "../Components/Header";
import styled from "styled-components";

const StyledTitle = styled.h1`
  width: 100%;
  padding: 20px 80px 0;
`;

function Products() {
  let { data: products, isFetching } = useGetProductsQuery(); // Access the cart state

  return products ? (
    <main>
      <Header />
      <StyledTitle>Products</StyledTitle>
      <ProductList data={products} />
    </main>
  ) : null;
}

export default Products;
